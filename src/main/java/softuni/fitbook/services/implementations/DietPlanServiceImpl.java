package softuni.fitbook.services.implementations;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import softuni.fitbook.data.models.*;
import softuni.fitbook.services.models.CreatorServiceModel;

import softuni.fitbook.services.models.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanMealServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.services.DietPlanService;
import softuni.fitbook.services.FileExporterService;
import softuni.fitbook.services.MealService;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class DietPlanServiceImpl implements DietPlanService {

    private final DietPlanRepository dietPlanRepository;
    private final MealRepository mealRepository;
    private final UserProfileRepository userProfileRepository;
    private final DietPlanMealRepository dietPlanMealRepository;
    private final MealService mealService;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final FileExporterService fileExporterService;

    @Autowired
    public DietPlanServiceImpl(DietPlanRepository dietPlanRepository, MealRepository mealRepository, UserProfileRepository userProfileRepository, DietPlanMealRepository dietPlanMealRepository, MealService mealService, UserRepository userRepository, ModelMapper modelMapper, FileExporterService fileExporterService) {
        this.dietPlanRepository = dietPlanRepository;
        this.mealRepository = mealRepository;
        this.userProfileRepository = userProfileRepository;
        this.dietPlanMealRepository = dietPlanMealRepository;
        this.mealService = mealService;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.fileExporterService = fileExporterService;
    }


    @Override
    public DietPlanServiceModel createDietPlan(DietPlanCreateServiceModel model, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));


        DietPlan dietPlan = modelMapper.map(model, DietPlan.class);

        dietPlan.setIsCopied(false);

        dietPlan.setUserProfile(user.getUserProfile());

        dietPlan.setMeals(new ArrayList<>());

        setInitialValuesToDietPlan(dietPlan);

        dietPlan = dietPlanRepository.save(dietPlan);

        return modelMapper.map(dietPlan, DietPlanServiceModel.class);

    }

    private void setInitialValuesToDietPlan(DietPlan dietPlan) {
        dietPlan.setTotalProtein(0);
        dietPlan.setTotalCarbohydrates(0);
        dietPlan.setTotalFats(0);
        dietPlan.setTotalCalories(0);
    }

    @Override
    public DietPlanServiceModel addMealFromMyMealsToMyDietPlan(String dietPlanId, String mealId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));


        Meal meal = user.getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such meal with given ID."));

        DietPlan dietPlan = user.getUserProfile()
                .getDietPlans()
                .stream()
                .filter(wp -> wp.getId().equals(dietPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such diet plan with given ID."));

        DietPlanMeal dietPlanMeal = new DietPlanMeal();
        dietPlanMeal.setOrderIndex(dietPlan.getMeals().size() + 1);
        dietPlanMeal.setMeal(meal);
        dietPlanMeal.setDietPlan(dietPlan);

        addNutritionToDietPlan(dietPlan, meal);

        dietPlanMealRepository.save(dietPlanMeal);

        dietPlan.getMeals().add(dietPlanMeal);

        dietPlan = dietPlanRepository.save(dietPlan);

        return mapDietPlanToDietPlanServiceModel(dietPlan);
    }

    private void addNutritionToDietPlan(DietPlan dietPlan, Meal meal) {

        dietPlan.setTotalProtein(dietPlan.getTotalProtein() + meal.getTotalProtein());
        dietPlan.setTotalCarbohydrates(dietPlan.getTotalCarbohydrates() + meal.getTotalCarbohydrates());
        dietPlan.setTotalFats(dietPlan.getTotalFats() + meal.getTotalFats());
        dietPlan.setTotalCalories(dietPlan.getTotalCalories() + meal.getTotalCalories());

    }

    @Override
    public List<DietPlanServiceModel> getAllDietPlansByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getDietPlans()
                .stream()
                .map(this::mapDietPlanToDietPlanServiceModel)
                .sorted(Comparator.comparing(DietPlanServiceModel::getName))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteMyDietPlanById(String dietPlanId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        DietPlan dietPlan = user.getUserProfile()
                .getDietPlans()
                .stream()
                .filter(wp -> wp.getId().equals(dietPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such diet plan with given ID."));

        dietPlan.getMeals().forEach(m -> {
            m.setDietPlan(null);
            m.setMeal(null);
            dietPlanMealRepository.delete(m);
        });


        user.getUserProfile().getDietPlans().remove(dietPlan);

        userProfileRepository.save(user.getUserProfile());

        dietPlanRepository.delete(dietPlan);

    }

    @Override
    public DietPlanServiceModel editMyDietPlanById(String dietPlanId, DietPlanServiceModel model, String username) {
        DietPlan oldDietPlan = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getDietPlans()
                .stream()
                .filter(wp -> wp.getId().equals(dietPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such diet plan with given ID."));

        DietPlan editedDietPlan = modelMapper.map(model, DietPlan.class);

        oldDietPlan.setName(editedDietPlan.getName());

        if (!oldDietPlan.getIsCopied()) {
            oldDietPlan.setIsPublic(editedDietPlan.getIsPublic());
        }

        List<DietPlanMeal> oldMeals = oldDietPlan.getMeals();

        List<DietPlanMeal> newMeals = editedDietPlan.getMeals();

        List<DietPlanMeal> mealsToRemove = new ArrayList<>();

        setInitialValuesToDietPlan(oldDietPlan);

        for (DietPlanMeal oldMeal : oldMeals) {

            DietPlanMeal editedDietPlanMeal = newMeals
                    .stream()
                    .filter(w -> w.getId().equals(oldMeal.getId()))
                    .findFirst().orElse(null);

            if (editedDietPlanMeal == null) {
                mealsToRemove.add(oldMeal);
            } else {
                oldMeal.setOrderIndex(editedDietPlanMeal.getOrderIndex());
                addNutritionToDietPlan(oldDietPlan, oldMeal.getMeal());
            }
        }


        oldMeals.removeAll(mealsToRemove);

        mealsToRemove.forEach(m -> {
            m.setMeal(null);
            dietPlanMealRepository.delete(m);
        });

        oldDietPlan = dietPlanRepository.save(oldDietPlan);

        return mapDietPlanToDietPlanServiceModel(oldDietPlan);
    }

    @Override
    public List<DietPlanServiceModel> getAllPublicDietPlans() {
        return dietPlanRepository
                .findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(this::mapDietPlanToDietPlanServiceModel)
                .sorted(Comparator.comparing(DietPlanServiceModel::getName))
                .collect(Collectors.toList());
    }

    @Override
    public DietPlanServiceModel copyDietPlanToLoggedUserDietPlans(String dietPlanId, String username) {
        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        DietPlan dietPlan = dietPlanRepository.findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        DietPlan copy = new DietPlan();

        copy.setName(dietPlan.getName() + " - Copy");
        copy.setIsPublic(false);
        copy.setIsCopied(true);
        copy.setMeals(new ArrayList<>());
        copy.setTotalProtein(dietPlan.getTotalProtein());
        copy.setTotalCarbohydrates(dietPlan.getTotalCarbohydrates());
        copy.setTotalFats(dietPlan.getTotalFats());
        copy.setTotalCalories(dietPlan.getTotalCalories());

        copy.setUserProfile(user.getUserProfile());

        dietPlanRepository.save(copy);

        dietPlan.getMeals()
                .forEach(w -> {
                    DietPlanMeal copyDietPlanMeal =
                            new DietPlanMeal();

                    Meal mealCopy = mealService.getMealCopy(w.getMeal());

                    mealRepository.save(mealCopy);

                    copyDietPlanMeal.setOrderIndex(w.getOrderIndex());
                    copyDietPlanMeal.setMeal(mealCopy);
                    copyDietPlanMeal.getMeal().setUserProfile(user.getUserProfile());
                    copyDietPlanMeal.setDietPlan(copy);
                    dietPlanMealRepository.save(copyDietPlanMeal);
                    copy.getMeals().add(copyDietPlanMeal);
                });

        dietPlanRepository.save(copy);

        return mapDietPlanToDietPlanServiceModel(copy);
    }

    @Override
    public DietPlanServiceModel getDietPlanById(String id) {
        return mapDietPlanToDietPlanServiceModel(dietPlanRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("No such diet plan with given ID.")));
    }

    @Override
    public byte[] exportDietPlanToExcel(String dietPlanId) {

        DietPlan workoutPlan = dietPlanRepository
                .findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        return fileExporterService
                .exportDietPlanToExcel(
                        mapDietPlanToDietPlanServiceModel(workoutPlan));
    }


    private DietPlanServiceModel mapDietPlanToDietPlanServiceModel(DietPlan dietPlan) {

        DietPlanServiceModel model = modelMapper.map(dietPlan, DietPlanServiceModel.class);

        User user = userRepository.findByUserProfileId(dietPlan.getUserProfile().getId())
                .orElseThrow(() -> new IllegalArgumentException("No user with given user profile ID."));

        CreatorServiceModel creator = modelMapper.map(user, CreatorServiceModel.class);

        model.setCreator(creator);


        model.setMeals(dietPlan.getMeals()
                .stream()
                .sorted(Comparator.comparing(DietPlanMeal::getOrderIndex))
                .map(this::mapDietPlanMealToServiceModel)
                .collect(Collectors.toList()));

        return model;
    }

    private DietPlanMealServiceModel mapDietPlanMealToServiceModel(DietPlanMeal meal) {

        DietPlanMealServiceModel model = modelMapper.map(meal, DietPlanMealServiceModel.class);

        model.setMeal(mealService.mapMealToMealServiceModel(meal.getMeal()));

        return model;

    }
}
