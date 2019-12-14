package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import softuni.fitbook.common.constants.AuthorityConstants;
import softuni.fitbook.common.constants.ErrorConstants;
import softuni.fitbook.common.constants.TypeConstants;
import softuni.fitbook.data.models.*;
import softuni.fitbook.services.ValidationService;
import softuni.fitbook.services.models.CommentInfoServiceModel;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.CreatorServiceModel;
import softuni.fitbook.services.models.meal.MealCreateServiceModel;
import softuni.fitbook.services.models.meal.MealFoodCreateServiceModel;
import softuni.fitbook.services.models.meal.MealServiceModel;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.services.MealService;
import softuni.fitbook.web.errors.exceptions.NoPrivilegesException;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import javax.persistence.PreRemove;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MealServiceImpl implements MealService {

    private final MealRepository mealRepository;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final DietPlanMealRepository dietPlanMealRepository;
    private final MealFoodRepository mealFoodRepository;
    private final FoodRepository foodRepository;
    private final MealLikeRepository mealLikeRepository;
    private final MealCommentRepository mealCommentRepository;
    private final RoleRepository roleRepository;
    private final ValidationService validationService;

    @Autowired
    public MealServiceImpl(MealRepository mealRepository, ModelMapper modelMapper, UserRepository userRepository, DietPlanMealRepository dietPlanMealRepository, MealFoodRepository mealFoodRepository, FoodRepository foodRepository, MealLikeRepository mealLikeRepository, MealCommentRepository mealCommentRepository, RoleRepository roleRepository, ValidationService validationService) {
        this.mealRepository = mealRepository;
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
        this.dietPlanMealRepository = dietPlanMealRepository;
        this.mealFoodRepository = mealFoodRepository;
        this.foodRepository = foodRepository;
        this.mealLikeRepository = mealLikeRepository;
        this.mealCommentRepository = mealCommentRepository;
        this.roleRepository = roleRepository;
        this.validationService = validationService;
    }

    @Override
    public MealServiceModel createMeal(MealCreateServiceModel model, String username) {

        Meal meal = modelMapper.map(model, Meal.class);

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME)
        );

        meal.setUserProfile(user.getUserProfile());
        meal.setTotalProtein(0);
        meal.setTotalCarbohydrates(0);
        meal.setTotalFats(0);
        meal.setTotalCalories(0);

        meal.setIsCopied(false);

        meal = mealRepository.save(meal);

        return modelMapper.map(meal, MealServiceModel.class);


    }

    @Override
    public MealServiceModel addMealFoodToMeal(MealFoodCreateServiceModel model, String mealId, String username) {

        validationService.validate(model);

        Meal meal = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        MealFood mealFood = modelMapper.map(model, MealFood.class);

        Food food = foodRepository.findById(model.getFoodId())
                .orElseThrow(() -> new NotFoundException("No such food with given ID."));


        mealFood.setFood(food);
        setMealFoodInitialValues(mealFood);
        addNutritionToMealFood(mealFood, food);

        mealFood = mealFoodRepository.save(mealFood);

        meal.getFoods().add(mealFood);

        addNutritionToMeal(meal, mealFood);

        meal = mealRepository.save(meal);

        return mapMealToMealServiceModel(meal);
    }



    @Override
    public List<MealServiceModel> getAllMealsByUsername(String username) {

        return userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given ID."))
                .getUserProfile()
                .getMeals()
                .stream()
                .map(this::mapMealToMealServiceModel)
                .sorted(Comparator.comparing(MealServiceModel::getName))
                .collect(Collectors.toList());
    }


    @Override
    @Transactional
    @PreRemove
    public void deleteMealById(String mealId, String username) {

        UserProfile userProfile = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile();

        Meal meal = userProfile
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        dietPlanMealRepository.findAllByMealId(mealId)
                .forEach(dpm -> {
                    dpm.setMeal(null);
                    dpm.setDietPlan(null);
                    dietPlanMealRepository.deleteById(dpm.getId());
                });

        meal.getLikes()
                .forEach(like -> {
                    like.setUserProfile(null);
                    like.setMeal(null);
                    mealLikeRepository.delete(like);
                });

        meal.getComments()
                .forEach(comment -> {
                    comment.setUserProfile(null);
                    comment.setMeal(null);
                    mealCommentRepository.delete(comment);
                });


        meal.getFoods()
                .forEach(f -> f.setFood(null));
        meal.getFoods().clear();
        userProfile.getMeals().remove(meal);

    }

    @Override

    public MealServiceModel editMealById(String mealId, MealServiceModel model, String username) {

        validationService.validate(model);

        Meal oldMeal = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));


        Meal editedMeal = modelMapper.map(model, Meal.class);


        oldMeal.setName(editedMeal.getName());

        if (!oldMeal.getIsCopied()) {
            oldMeal.setIsPublic(editedMeal.getIsPublic());
        }


        List<MealFood> oldFoods = oldMeal.getFoods();

        List<MealFood> editedFoods = editedMeal.getFoods();

        setMealInitialValues(oldMeal);


        List<MealFood> foodsToRemove = new ArrayList<>();

        for (MealFood oldFood : oldFoods) {

            MealFood editedFood = editedFoods
                    .stream()
                    .filter(w -> w.getId().equals(oldFood.getId()))
                    .findFirst().orElse(null);

            if (editedFood == null) {
                foodsToRemove.add(oldFood);
            } else {
                setMealFoodInitialValues(oldFood);
                oldFood.setServing(editedFood.getServing());
                addNutritionToMealFood(oldFood, oldFood.getFood());
                addNutritionToMeal(oldMeal, oldFood);
            }
        }

        foodsToRemove.forEach(w -> {
            w.setFood(null);
        });

        oldFoods.removeAll(foodsToRemove);

        mealRepository.save(oldMeal);

        return mapMealToMealServiceModel(oldMeal);
    }

    @Override
    public List<MealServiceModel> getAllPublicMeals(String username) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        List<MealLike> mealLikes = user.getUserProfile().getMealLikes();

        return mealRepository
                .findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(meal -> {
                    MealServiceModel mealServiceModel = mapMealToMealServiceModel(meal);
                    mealServiceModel.setIsLiked(isMealLiked(meal.getId(), mealLikes));
                    return mealServiceModel;
                })
                .collect(Collectors.toList());

    }

    private Boolean isMealLiked(String mealId, List<MealLike> likes) {

        return !likes.isEmpty() && likes
                .stream()
                .anyMatch(l -> l.getMeal().getId().equals(mealId));

    }

    @Override
    public MealServiceModel copyMealToLoggedUserMeals(String mealId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        Meal meal = mealRepository
                .findById(mealId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        Meal copy = getMealCopy(meal);
        copy.setUserProfile(user.getUserProfile());

        copy = mealRepository.save(copy);

        return mapMealToMealServiceModel(copy);
    }

    @Override
    public MealServiceModel getMealById(String id, String username) {

        Meal meal = mealRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        List<MealLike> mealLikes = user.getUserProfile().getMealLikes();

        MealServiceModel mealServiceModel = mapMealToMealServiceModel(meal);

        mealServiceModel.setIsLiked(isMealLiked(id, mealLikes));

        mealServiceModel.setComments(meal
                .getComments()
                .stream()
                .map(c -> {
                    CommentServiceModel comment = modelMapper.map(c, CommentServiceModel.class);

                    User commentUser = userRepository.findByUserProfileId(c.getUserProfile().getId())
                            .orElseThrow(() -> new NotFoundException("No such user with given user profile ID."));

                    comment.setUsername(commentUser.getUsername());
                    comment.setProfilePictureURL(commentUser.getUserProfile().getProfilePictureURL());

                    return comment;

                })
                .sorted(Comparator.comparing(CommentServiceModel::getPostedOn))
                .collect(Collectors.toList()));

        return mealServiceModel;

    }

    @Override
    public MealServiceModel mapMealToMealServiceModel(Meal meal) {
        MealServiceModel model = modelMapper.map(meal, MealServiceModel.class);

        CreatorServiceModel creator = modelMapper.map(userRepository.findByUserProfileId(meal.getUserProfile().getId()).orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID)), CreatorServiceModel.class);
        model.setCreator(creator);

        model.setLikesCount((long) meal.getLikes().size());

        model.getFoods().sort(Comparator.comparing(f -> f.getFood().getName()));

        return model;
    }

    @Override
    public Meal getMealCopy(Meal source) {

        Meal meal = new Meal();
        meal.setName(source.getName() + " - Copy");
        meal.setIsCopied(true);
        meal.setIsPublic(false);
        meal.setTotalCalories(source.getTotalCalories());
        meal.setTotalProtein(source.getTotalProtein());
        meal.setTotalCarbohydrates(source.getTotalCarbohydrates());
        meal.setTotalFats(source.getTotalFats());
        meal.setLikes(new ArrayList<>());
        meal.setComments(new ArrayList<>());

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

    @Override
    @Transactional
    public MealServiceModel likeMeal(String mealId, String username) {

        UserProfile userProfile = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile();

        Meal meal = mealRepository
                .findById(mealId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        Optional<MealLike> likeOptional = meal.getLikes()
                .stream()
                .filter(l -> l.getUserProfile().equals(userProfile))
                .findFirst();


        boolean liked = false;

        if (likeOptional.isEmpty()) {

            MealLike like = new MealLike();
            like.setUserProfile(userProfile);
            like.setMeal(meal);
            liked = true;
            mealLikeRepository.save(like);

            meal.getLikes().add(like);
            mealRepository.save(meal);
        } else {

            MealLike mealLike = likeOptional.get();

            mealLike.setMeal(null);
            mealLike.setUserProfile(null);

            meal.getLikes().remove(mealLike);
            mealRepository.save(meal);
            mealLikeRepository.deleteById(mealLike.getId());
        }


        MealServiceModel mealServiceModel = mapMealToMealServiceModel(meal);
        mealServiceModel.setIsLiked(liked);

        return mealServiceModel;
    }

    @Override
    public CommentServiceModel commentMeal(String mealId, CommentServiceModel model, String username) {

        validationService.validate(model);

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        Meal meal = mealRepository
                .findById(mealId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));


        MealComment mealComment = modelMapper.map(model, MealComment.class);
        mealComment.setPostedOn(LocalDateTime.now());
        mealComment.setMeal(meal);
        mealComment.setUserProfile(user.getUserProfile());

        mealCommentRepository.save(mealComment);

        CommentServiceModel comment = modelMapper.map(mealComment, CommentServiceModel.class);
        comment.setUsername(username);
        comment.setProfilePictureURL(user.getUserProfile().getProfilePictureURL());

        return comment;
    }

    @Override
    @Transactional
    public void deleteMealComment(String commentId, String username) {

        MealComment comment = mealCommentRepository.findById(commentId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_COMMENT_WITH_GIVEN_ID));

        UserRole moderatorRole = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_MODERATOR);

        Meal meal = comment.getMeal();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        if (!user.getAuthorities().contains(moderatorRole) &&
                !meal.getUserProfile().getId().equals(user.getUserProfile().getId()) &&
                !comment.getUserProfile().getId().equals(user.getUserProfile().getId())) {

            throw new NoPrivilegesException(ErrorConstants.NO_PRESENT_PRIVILEGES_DELETE_COMMENT);
        }

        comment.setUserProfile(null);
        comment.setMeal(null);


        mealCommentRepository.deleteById(comment.getId());

    }

    @Override
    public CommentInfoServiceModel getCommentInfoByMealId(String mealId, String username) {

        Meal meal = mealRepository
                .findById(mealId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        User mealOwnerUser = userRepository
                .findByUserProfileId(meal.getUserProfile().getId())
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

        CommentInfoServiceModel model = new CommentInfoServiceModel();
        model.setCommentatorUsername(username);
        model.setOwnerFirstName(meal.getUserProfile().getFirstName());
        model.setOwnerUsername(mealOwnerUser.getUsername());
        model.setOwnerEmail(mealOwnerUser.getEmail());
        model.setEntityType(TypeConstants.MEAL);
        model.setEntityName(meal.getName());

        return model;

    }

    private void setMealFoodInitialValues(MealFood mealFood) {
        mealFood.setCaloriesPerServing(0);
        mealFood.setProteinPerServing(0);
        mealFood.setCarbohydratesPerServing(0);
        mealFood.setFatsPerServing(0);
    }

    private void addNutritionToMeal(Meal meal, MealFood mealFood) {

        meal.setTotalProtein(mealFood.getProteinPerServing() + meal.getTotalProtein());
        meal.setTotalCarbohydrates(mealFood.getCarbohydratesPerServing() + meal.getTotalCarbohydrates());
        meal.setTotalFats(mealFood.getFatsPerServing() + meal.getTotalFats());
        meal.setTotalCalories(mealFood.getCaloriesPerServing() + meal.getTotalCalories());

    }



    private void addNutritionToMealFood(MealFood mealFood, Food food) {
        Integer caloriesPerServing = (int) (mealFood.getServing() * (food.getCaloriesPerHundred() / 100d));
        Integer proteinPerServing = (int) (mealFood.getServing() * (food.getProteinPerHundred() / 100d));
        Integer carbohydratesPerServing = (int) (mealFood.getServing() * (food.getCarbohydratesPerHundred() / 100d));
        Integer fatsPerServing = (int) (mealFood.getServing() * (food.getFatsPerHundred() / 100d));

        mealFood.setCaloriesPerServing(caloriesPerServing + mealFood.getCaloriesPerServing());
        mealFood.setProteinPerServing(proteinPerServing + mealFood.getProteinPerServing());
        mealFood.setCarbohydratesPerServing(carbohydratesPerServing + mealFood.getCarbohydratesPerServing());
        mealFood.setFatsPerServing(fatsPerServing + mealFood.getFatsPerServing());
    }

    private void setMealInitialValues(Meal oldMeal) {

        oldMeal.setTotalProtein(0);
        oldMeal.setTotalCarbohydrates(0);
        oldMeal.setTotalFats(0);
        oldMeal.setTotalCalories(0);

    }
}
