package softuni.fitbook.services.implementations;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import softuni.fitbook.common.constants.AuthorityConstants;
import softuni.fitbook.common.constants.ErrorConstants;
import softuni.fitbook.common.constants.TypeConstants;
import softuni.fitbook.data.models.*;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.services.DietPlanService;
import softuni.fitbook.services.FileExporterService;
import softuni.fitbook.services.MealService;
import softuni.fitbook.services.ValidationService;
import softuni.fitbook.services.models.CommentInfoServiceModel;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.CreatorServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanMealServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;
import softuni.fitbook.web.errors.exceptions.NoPrivilegesException;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
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
    private final DietPlanLikeRepository dietPlanLikeRepository;
    private final DietPlanCommentRepository dietPlanCommentRepository;
    private final RoleRepository roleRepository;
    private final ValidationService validationService;

    @Autowired
    public DietPlanServiceImpl(DietPlanRepository dietPlanRepository, MealRepository mealRepository, UserProfileRepository userProfileRepository, DietPlanMealRepository dietPlanMealRepository, MealService mealService, UserRepository userRepository, ModelMapper modelMapper, FileExporterService fileExporterService, DietPlanLikeRepository dietPlanLikeRepository, DietPlanCommentRepository dietPlanCommentRepository, RoleRepository roleRepository, ValidationService validationService) {
        this.dietPlanRepository = dietPlanRepository;
        this.mealRepository = mealRepository;
        this.userProfileRepository = userProfileRepository;
        this.dietPlanMealRepository = dietPlanMealRepository;
        this.mealService = mealService;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.fileExporterService = fileExporterService;
        this.dietPlanLikeRepository = dietPlanLikeRepository;
        this.dietPlanCommentRepository = dietPlanCommentRepository;
        this.roleRepository = roleRepository;
        this.validationService = validationService;
    }


    @Override
    public DietPlanServiceModel createDietPlan(DietPlanCreateServiceModel model, String username) {

        validationService.validate(model);

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));


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
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));


        Meal meal = user.getUserProfile()
                .getMeals()
                .stream()
                .filter(w -> w.getId().equals(mealId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_MEAL_WITH_GIVEN_ID));

        DietPlan dietPlan = user.getUserProfile()
                .getDietPlans()
                .stream()
                .filter(wp -> wp.getId().equals(dietPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

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
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
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
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        DietPlan dietPlan = user.getUserProfile()
                .getDietPlans()
                .stream()
                .filter(wp -> wp.getId().equals(dietPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

        dietPlan.getMeals().forEach(m -> {
            m.setDietPlan(null);
            m.setMeal(null);
            dietPlanMealRepository.delete(m);
        });

        dietPlan.getLikes()
                .forEach(like -> {
                    like.setUserProfile(null);
                    like.setDietPlan(null);
                    dietPlanLikeRepository.delete(like);
                });

        dietPlan.getComments()
                .forEach(comment -> {
                    comment.setUserProfile(null);
                    comment.setDietPlan(null);
                    dietPlanCommentRepository.delete(comment);
                });


        user.getUserProfile().getDietPlans().remove(dietPlan);

        userProfileRepository.save(user.getUserProfile());

        dietPlanRepository.delete(dietPlan);

    }

    @Override
    public DietPlanServiceModel editMyDietPlanById(String dietPlanId, DietPlanServiceModel model, String username) {

        validationService.validate(model);

        DietPlan oldDietPlan = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getDietPlans()
                .stream()
                .filter(wp -> wp.getId().equals(dietPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

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
    public List<DietPlanServiceModel> getAllPublicDietPlans(String username) {

        List<DietPlanLike> dietPlanLikes = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getDietPlanLikes();

        return dietPlanRepository
                .findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(d -> {
                    DietPlanServiceModel model = mapDietPlanToDietPlanServiceModel(d);
                    model.setIsLiked(isDietPlanLiked(d.getId(), dietPlanLikes));

                    return model;
                })
                .collect(Collectors.toList());
    }

    private Boolean isDietPlanLiked(String dietPlanId, List<DietPlanLike> likes) {

        return !likes.isEmpty() && likes
                .stream()
                .anyMatch(l -> l.getDietPlan().getId().equals(dietPlanId));
    }

    @Override
    public DietPlanServiceModel copyDietPlanToLoggedUserDietPlans(String dietPlanId, String username) {
        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        DietPlan dietPlan = dietPlanRepository.findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

        DietPlan copy = new DietPlan();

        copy.setName(dietPlan.getName() + " - Copy");
        copy.setIsPublic(false);
        copy.setIsCopied(true);
        copy.setMeals(new ArrayList<>());
        copy.setLikes(new ArrayList<>());
        copy.setComments(new ArrayList<>());
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
    public DietPlanServiceModel getDietPlanById(String id, String username) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        List<DietPlanLike> dietPlanLikes = user.getUserProfile().getDietPlanLikes();


        DietPlan dietPlan = dietPlanRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));


        DietPlanServiceModel dietPlanServiceModel = mapDietPlanToDietPlanServiceModel(dietPlan);

        dietPlanServiceModel.setIsLiked(isDietPlanLiked(id, dietPlanLikes));

        dietPlanServiceModel.setComments(dietPlan
                .getComments()
                .stream()
                .map(c -> {
                    CommentServiceModel comment = modelMapper.map(c, CommentServiceModel.class);

                    User commentUser = userRepository.findByUserProfileId(c.getUserProfile().getId())
                            .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

                    comment.setUsername(commentUser.getUsername());
                    comment.setProfilePictureURL(commentUser.getUserProfile().getProfilePictureURL());

                    return comment;

                })
                .sorted(Comparator.comparing(CommentServiceModel::getPostedOn))
                .collect(Collectors.toList()));

        return dietPlanServiceModel;
    }

    @Override
    public byte[] exportDietPlanToExcel(String dietPlanId) {

        DietPlan dietPlan = dietPlanRepository
                .findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

        return fileExporterService
                .exportDietPlanToExcel(
                        mapDietPlanToDietPlanServiceModel(dietPlan));
    }

    @Override
    @Transactional
    public DietPlanServiceModel likeDietPlan(String dietPlanId, String username) {

        UserProfile userProfile = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile();

        DietPlan dietPlan = dietPlanRepository
                .findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

        Optional<DietPlanLike> likeOptional = dietPlan.getLikes()
                .stream()
                .filter(l -> l.getUserProfile().equals(userProfile))
                .findFirst();


        boolean liked = false;

        if (likeOptional.isEmpty()) {

            DietPlanLike like = new DietPlanLike();
            like.setUserProfile(userProfile);
            like.setDietPlan(dietPlan);
            liked = true;
            dietPlanLikeRepository.save(like);

            dietPlan.getLikes().add(like);
            dietPlanRepository.save(dietPlan);
        } else {

            DietPlanLike dietPlanLike = likeOptional.get();

            dietPlanLike.setDietPlan(null);
            dietPlanLike.setUserProfile(null);

            dietPlan.getLikes().remove(dietPlanLike);
            dietPlanRepository.save(dietPlan);
            dietPlanLikeRepository.deleteById(dietPlanLike.getId());
        }


        DietPlanServiceModel dietPlanServiceModel = mapDietPlanToDietPlanServiceModel(dietPlan);
        dietPlanServiceModel.setIsLiked(liked);

        return dietPlanServiceModel;
    }

    @Override
    public CommentServiceModel commentDietPlan(String dietPlanId, CommentServiceModel model, String username) {

        validationService.validate(model);

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        DietPlan dietPlan = dietPlanRepository
                .findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));


        DietPlanComment dietPlanComment = modelMapper.map(model, DietPlanComment.class);
        dietPlanComment.setPostedOn(LocalDateTime.now());
        dietPlanComment.setDietPlan(dietPlan);
        dietPlanComment.setUserProfile(user.getUserProfile());

        dietPlanCommentRepository.save(dietPlanComment);

        CommentServiceModel comment = modelMapper.map(dietPlanComment, CommentServiceModel.class);
        comment.setUsername(username);
        comment.setProfilePictureURL(user.getUserProfile().getProfilePictureURL());

        return comment;
    }

    @Override
    @Transactional
    public void deleteDietPlanComment(String commentId, String username) {

        DietPlanComment comment = dietPlanCommentRepository.findById(commentId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_COMMENT_WITH_GIVEN_ID));

        UserRole moderatorRole = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_MODERATOR);

        DietPlan dietPlan = comment.getDietPlan();


        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        if (!user.getAuthorities().contains(moderatorRole) &&
                !dietPlan.getUserProfile().getId().equals(user.getUserProfile().getId()) &&
                !comment.getUserProfile().getId().equals(user.getUserProfile().getId())) {

            throw new NoPrivilegesException(ErrorConstants.NO_PRESENT_PRIVILEGES_DELETE_COMMENT);
        }

        comment.setUserProfile(null);
        comment.setDietPlan(null);


        dietPlanCommentRepository.deleteById(comment.getId());

    }

    @Override
    public CommentInfoServiceModel getCommentInfoByDietPlanId(String dietPlanId, String username) {
        DietPlan dietPlan = dietPlanRepository
                .findById(dietPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_DIET_PLAN_WITH_GIVEN_ID));

        User dietPlanOwnerUser = userRepository
                .findByUserProfileId(dietPlan.getUserProfile().getId())
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

        CommentInfoServiceModel model = new CommentInfoServiceModel();
        model.setCommentatorUsername(username);
        model.setOwnerFirstName(dietPlan.getUserProfile().getFirstName());
        model.setOwnerUsername(dietPlanOwnerUser.getUsername());
        model.setOwnerEmail(dietPlanOwnerUser.getEmail());
        model.setEntityType(TypeConstants.DIET_PLAN);
        model.setEntityName(dietPlan.getName());

        return model;
    }

    private DietPlanServiceModel mapDietPlanToDietPlanServiceModel(DietPlan dietPlan) {

        DietPlanServiceModel model = modelMapper.map(dietPlan, DietPlanServiceModel.class);

        User user = userRepository.findByUserProfileId(dietPlan.getUserProfile().getId())
                .orElseThrow(() -> new IllegalArgumentException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

        CreatorServiceModel creator = modelMapper.map(user, CreatorServiceModel.class);

        model.setCreator(creator);

        model.setLikesCount((long) dietPlan.getLikes().size());


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
