package softuni.fitbook.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import softuni.fitbook.domain.entities.*;
import softuni.fitbook.domain.models.service.CreatorServiceModel;
import softuni.fitbook.domain.models.service.meal.MealCreateServiceModel;
import softuni.fitbook.domain.models.service.meal.MealFoodCreateServiceModel;
import softuni.fitbook.domain.models.service.meal.MealServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;
import softuni.fitbook.repository.*;
import softuni.fitbook.service.MealService;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final DietPlanMealRepository dietPlanMealRepository;
    private final MealFoodRepository mealFoodRepository;
    private final FoodRepository foodRepository;

    @Autowired
    public MealServiceImpl(MealRepository mealRepository, ModelMapper modelMapper, UserRepository userRepository, DietPlanMealRepository dietPlanMealRepository, MealFoodRepository mealFoodRepository, FoodRepository foodRepository) {
        this.mealRepository = mealRepository;
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
        this.dietPlanMealRepository = dietPlanMealRepository;
        this.mealFoodRepository = mealFoodRepository;
        this.foodRepository = foodRepository;
    }

    @Override
    public MealServiceModel createMeal(MealCreateServiceModel model, String username) {

        Meal meal = modelMapper.map(model, Meal.class);

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new NotFoundException("No such user with given username.")
        );

        meal.setUserProfile(user.getUserProfile());
        meal.setIsCopied(false);

        meal = mealRepository.save(meal);

        return modelMapper.map(meal, MealServiceModel.class);


    }

    @Override
    public MealServiceModel addMealFoodToMeal(MealFoodCreateServiceModel model, String mealId, String username) {

        Meal meal = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such meal with given ID."));

        MealFood mealFood = modelMapper.map(model, MealFood.class);

        Food food = foodRepository.findById(model.getFoodId())
                .orElseThrow(() -> new NotFoundException("No such food with given ID."));


        mealFood.setFood(food);

        addNutritionToMealFood(mealFood, food);

        mealFood = mealFoodRepository.save(mealFood);

        meal.getFoods().add(mealFood);

        addNutritionToMeal(meal, mealFood);

        meal = mealRepository.save(meal);

        return mapMealToMealServiceModel(meal);
    }

    private void addNutritionToMeal(Meal meal, MealFood mealFood) {

        meal.setTotalProtein(mealFood.getProteinPerServing() + meal.getTotalProtein());
        meal.setTotalProtein(mealFood.getCarbohydratesPerServing() + meal.getTotalCarbohydrates());
        meal.setTotalProtein(mealFood.getFatsPerServing() + meal.getTotalFats());
        meal.setTotalProtein(mealFood.getCaloriesPerServing() + meal.getTotalCalories());

    }

    private void removeNutritionFromMeal(Meal meal, MealFood mealFood) {

        meal.setTotalProtein(mealFood.getProteinPerServing() - meal.getTotalProtein());
        meal.setTotalProtein(mealFood.getCarbohydratesPerServing() - meal.getTotalCarbohydrates());
        meal.setTotalProtein(mealFood.getFatsPerServing() - meal.getTotalFats());
        meal.setTotalProtein(mealFood.getCaloriesPerServing() - meal.getTotalCalories());

    }

    private void addNutritionToMealFood(MealFood mealFood, Food food) {
        Integer caloriesPerServing = (int) (mealFood.getServing() * (food.getCaloriesPerHundred() / 100d));
        Integer proteinPerServing = (int) (mealFood.getServing() * (food.getProteinPerHundred() / 100d));
        Integer carbohydratesPerServing = (int) (mealFood.getServing() * (food.getCarbohydratesPerHundred() / 100d));
        Integer fatsPerServing = (int) (mealFood.getServing() * (food.getFatsPerHundred() / 100d));

        mealFood.setCaloriesPerServing(caloriesPerServing + mealFood.getCaloriesPerServing());
        mealFood.setProteinPerServing(proteinPerServing + mealFood.getProteinPerServing());
        mealFood.setCarbohydratesPerServing(carbohydratesPerServing + mealFood.getCaloriesPerServing());
        mealFood.setFatsPerServing(fatsPerServing + mealFood.getFatsPerServing());
    }

    @Override
    public List<MealServiceModel> getAllMealsByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new NotFoundException("No such user with given ID."));

        return user.getUserProfile().getMeals()
                .stream()
                .map(this::mapMealToMealServiceModel)
                .collect(Collectors.toList());
    }


    @Override
    @Transactional
    public void deleteMealById(String mealId, String username) {

        Meal meal = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such meal with given ID."));

        dietPlanMealRepository.findAllByMealId(mealId)
                .forEach(dpm -> {
                    dpm.setMeal(null);
                    dpm.setDietPlan(null);
                    dietPlanMealRepository.deleteById(dpm.getId());
                });

        mealRepository.delete(meal);

    }

    @Override

    public MealServiceModel editMealById(String mealId, MealServiceModel model, String username) {

        Meal oldMeal = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such meal with given ID."));

        Meal editedMeal = modelMapper.map(model, Meal.class);


        List<MealFood> oldFoods = oldMeal.getFoods();

        List<MealFood> editedFoods = editedMeal.getFoods();


        List<MealFood> foodsToRemove = new ArrayList<>();

        for (MealFood oldFood : oldFoods) {

            MealFood foodCandidate = editedFoods
                    .stream()
                    .filter(w -> w.getId().equals(oldFood.getId()))
                    .findFirst().orElse(null);

            if (foodCandidate == null) {
                foodsToRemove.add(oldFood);
            }
        }

        oldFoods.removeAll(foodsToRemove);

        foodsToRemove.forEach(w -> {
            w.setFood(null);
            removeNutritionFromMeal(oldMeal, w);
            mealFoodRepository.delete(w);
        });


        mealRepository.save(oldMeal);

        return mapMealToMealServiceModel(oldMeal);
    }

    @Override
    public List<MealServiceModel> getAllPublicMeals() {

        return mealRepository
                .findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(this::mapMealToMealServiceModel)
                .collect(Collectors.toList());

    }

    @Override
    public MealServiceModel copyMealToLoggedUserMeals(String mealId, String username) {

        User user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        Meal meal = mealRepository.findById(mealId).orElseThrow(() -> new NotFoundException("No such meal with given ID."));

        Meal copy = getMealCopy(meal);
        copy.setUserProfile(user.getUserProfile());

        copy = mealRepository.save(copy);

        return mapMealToMealServiceModel(copy);
    }

    @Override
    public MealServiceModel getMealById(String id) {

        return mapMealToMealServiceModel(mealRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("No such meal with given ID.")));

    }

    @Override
    public MealServiceModel mapMealToMealServiceModel(Meal meal) {
        MealServiceModel model = modelMapper.map(meal, MealServiceModel.class);

        CreatorServiceModel creator = modelMapper.map(userRepository.findByUserProfileId(meal.getUserProfile().getId()).orElseThrow(() -> new NotFoundException("No such user with given User Profile ID.")), CreatorServiceModel.class);
        model.setCreator(creator);

        model.getFoods().sort(Comparator.comparing(f -> f.getFood().getName()));

        return model;
    }

    @Override
    public Meal getMealCopy(Meal source) {

        Meal meal = new Meal();
        meal.setName(source.getName() + " - Copy");
        meal.setIsCopied(true);
        meal.setIsPublic(false);

        List<MealFood> foods = source.getFoods()
                .stream()
                .map(f -> {
                    MealFood mealFood = new MealFood();
                    mealFood.setFood(f.getFood());
                    mealFood.setServing(f.getServing());
                    mealFood.setProteinPerServing(f.getProteinPerServing());
                    mealFood.setCarbohydratesPerServing(f.getCarbohydratesPerServing());
                    mealFood.setFatsPerServing(f.getFatsPerServing());
                    mealFood.setCaloriesPerServing(f.getCaloriesPerServing());

                    return mealFood;
                }).collect(Collectors.toList());

        meal.setFoods(foods);

        return meal;
    }
}
