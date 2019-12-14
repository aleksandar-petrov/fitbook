package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import softuni.fitbook.common.constants.AuthorityConstants;
import softuni.fitbook.common.constants.ErrorConstants;
import softuni.fitbook.common.constants.TypeConstants;
import softuni.fitbook.data.models.*;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.services.FileExporterService;
import softuni.fitbook.services.ValidationService;
import softuni.fitbook.services.WorkoutPlanService;
import softuni.fitbook.services.WorkoutService;
import softuni.fitbook.services.models.CommentInfoServiceModel;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.CreatorServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanWorkoutServiceModel;
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
public class WorkoutPlanServiceImpl implements WorkoutPlanService {

    private final WorkoutPlanRepository workoutPlanRepository;
    private final WorkoutRepository workoutRepository;
    private final UserProfileRepository userProfileRepository;
    private final WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository;
    private final WorkoutService workoutService;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final FileExporterService fileExporterService;
    private final WorkoutPlanLikeRepository workoutPlanLikeRepository;
    private final WorkoutPlanCommentRepository workoutPlanCommentRepository;
    private final RoleRepository roleRepository;
    private final ValidationService validationService;

    @Autowired
    public WorkoutPlanServiceImpl(WorkoutPlanRepository workoutPlanRepository, WorkoutRepository workoutRepository, UserProfileRepository userProfileRepository, WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository, WorkoutService workoutService, UserRepository userRepository, ModelMapper modelMapper, FileExporterService fileExporterService, WorkoutPlanLikeRepository workoutPlanLikeRepository, WorkoutPlanCommentRepository workoutPlanCommentRepository, RoleRepository roleRepository, ValidationService validationService) {
        this.workoutPlanRepository = workoutPlanRepository;
        this.workoutRepository = workoutRepository;
        this.userProfileRepository = userProfileRepository;
        this.workoutPlanWorkoutRepository = workoutPlanWorkoutRepository;
        this.workoutService = workoutService;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.fileExporterService = fileExporterService;
        this.workoutPlanLikeRepository = workoutPlanLikeRepository;
        this.workoutPlanCommentRepository = workoutPlanCommentRepository;
        this.roleRepository = roleRepository;
        this.validationService = validationService;
    }

    @Override
    public WorkoutPlanServiceModel createWorkoutPlan(WorkoutPlanCreateServiceModel model, String username) {

        validationService.validate(model);

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        WorkoutPlan workoutPlan = modelMapper.map(model, WorkoutPlan.class);

        workoutPlan.setIsCopied(false);

        workoutPlan.setWorkouts(new ArrayList<>());

        workoutPlan.setUserProfile(user.getUserProfile());

        workoutPlan = workoutPlanRepository.save(workoutPlan);

        return modelMapper.map(workoutPlan, WorkoutPlanServiceModel.class);
    }

    @Override
    public WorkoutPlanServiceModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(String workoutPlanId, String workoutId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));


        Workout workout = user.getUserProfile()
                .getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        WorkoutPlan workoutPlan = user.getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        WorkoutPlanWorkout workoutPlanWorkout = new WorkoutPlanWorkout();
        workoutPlanWorkout.setOrderIndex(workoutPlan.getWorkouts().size() + 1);
        workoutPlanWorkout.setWorkout(workout);
        workoutPlanWorkout.setWorkoutPlan(workoutPlan);

        workoutPlanWorkoutRepository.save(workoutPlanWorkout);

        workoutPlan.getWorkouts().add(workoutPlanWorkout);

        workoutPlan = workoutPlanRepository.save(workoutPlan);

        return mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan);
    }

    @Override
    public List<WorkoutPlanServiceModel> getAllWorkoutPlansByUsername(String username) {

        return this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getWorkoutPlans()
                .stream()
                .map(this::mapWorkoutPlanToWorkoutPlanServiceModel)
                .sorted(Comparator.comparing(WorkoutPlanServiceModel::getName))
                .collect(Collectors.toList());
    }


    @Override
    @Transactional
    public void deleteMyWorkoutPlanById(String workoutPlanId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        WorkoutPlan workoutPlan = user.getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        workoutPlan.getWorkouts().forEach(w -> {
            w.setWorkout(null);
            workoutPlanWorkoutRepository.delete(w);
        });

        workoutPlan.getLikes()
                .forEach(like -> {
                    like.setUserProfile(null);
                    like.setWorkoutPlan(null);
                    workoutPlanLikeRepository.delete(like);
                });

        workoutPlan.getComments()
                .forEach(comment -> {
                    comment.setUserProfile(null);
                    comment.setWorkoutPlan(null);
                    workoutPlanCommentRepository.delete(comment);
                });


        user.getUserProfile().getWorkoutPlans().remove(workoutPlan);

        userProfileRepository.save(user.getUserProfile());

        workoutPlanRepository.delete(workoutPlan);
    }

    @Override
    public WorkoutPlanServiceModel editMyWorkoutPlanById(String workoutPlanId, WorkoutPlanServiceModel model, String username) {

        validationService.validate(model);

        WorkoutPlan oldWorkoutPlan = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        WorkoutPlan editedWorkoutPlan = modelMapper.map(model, WorkoutPlan.class);

        oldWorkoutPlan.setName(editedWorkoutPlan.getName());

        if (!oldWorkoutPlan.getIsCopied()) {
            oldWorkoutPlan.setIsPublic(editedWorkoutPlan.getIsPublic());
        }

        List<WorkoutPlanWorkout> oldWorkouts = oldWorkoutPlan.getWorkouts();

        List<WorkoutPlanWorkout> newWorkouts = editedWorkoutPlan.getWorkouts();

        List<WorkoutPlanWorkout> workoutsToRemove = new ArrayList<>();

        for (WorkoutPlanWorkout oldWorkout : oldWorkouts) {

            WorkoutPlanWorkout workoutPlanWorkout = newWorkouts
                    .stream()
                    .filter(w -> w.getId().equals(oldWorkout.getId()))
                    .findFirst().orElse(null);

            if (workoutPlanWorkout == null) {
                workoutsToRemove.add(oldWorkout);
            } else {
                oldWorkout.setOrderIndex(workoutPlanWorkout.getOrderIndex());
            }
        }

        oldWorkouts.removeAll(workoutsToRemove);

        workoutsToRemove.forEach(w -> {
            w.setWorkout(null);
            workoutPlanWorkoutRepository.delete(w);
        });

        oldWorkoutPlan = workoutPlanRepository.save(oldWorkoutPlan);

        return mapWorkoutPlanToWorkoutPlanServiceModel(oldWorkoutPlan);
    }

    @Override
    public List<WorkoutPlanServiceModel> getAllPublicWorkoutPlans(String username) {

        List<WorkoutPlanLike> workoutPlanLikes = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getWorkoutPlanLikes();


        return workoutPlanRepository
                .findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(w -> {
                    WorkoutPlanServiceModel model = mapWorkoutPlanToWorkoutPlanServiceModel(w);
                    model.setIsLiked(isWorkoutPlanLiked(w.getId(), workoutPlanLikes));
                    return model;
                })
                .sorted(Comparator.comparing(WorkoutPlanServiceModel::getName))
                .collect(Collectors.toList());
    }

    private Boolean isWorkoutPlanLiked(String workoutPlanId, List<WorkoutPlanLike> likes) {

        return !likes.isEmpty() && likes
                .stream()
                .anyMatch(l -> l.getWorkoutPlan().getId().equals(workoutPlanId));
    }

    @Override
    public WorkoutPlanServiceModel copyWorkoutPlanToLoggedUserWorkoutPlans(String workoutPlanId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        WorkoutPlan copy = new WorkoutPlan();

        copy.setName(workoutPlan.getName() + " - Copy");
        copy.setIsPublic(false);
        copy.setIsCopied(true);
        copy.setWorkouts(new ArrayList<>());
        copy.setLikes(new ArrayList<>());
        copy.setComments(new ArrayList<>());

        copy.setUserProfile(user.getUserProfile());

        workoutPlanRepository.save(copy);

        workoutPlan.getWorkouts()
                .forEach(w -> {
                    WorkoutPlanWorkout copyWorkoutPlanWorkout =
                            new WorkoutPlanWorkout();

                    Workout workoutCopy = workoutService.getWorkoutCopy(w.getWorkout());

                    workoutRepository.save(workoutCopy);

                    copyWorkoutPlanWorkout.setOrderIndex(w.getOrderIndex());
                    copyWorkoutPlanWorkout.setWorkout(workoutCopy);
                    copyWorkoutPlanWorkout.getWorkout().setUserProfile(user.getUserProfile());
                    copyWorkoutPlanWorkout.setWorkoutPlan(copy);
                    workoutPlanWorkoutRepository.save(copyWorkoutPlanWorkout);
                    copy.getWorkouts().add(copyWorkoutPlanWorkout);
                });

        workoutPlanRepository.save(copy);

        return mapWorkoutPlanToWorkoutPlanServiceModel(copy);

    }


    @Override
    public WorkoutPlanServiceModel getWorkoutPlanById(String id, String username) {
        WorkoutPlan workoutPlan = workoutPlanRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        List<WorkoutPlanLike> workoutPlanLikes = user.getUserProfile().getWorkoutPlanLikes();

        WorkoutPlanServiceModel workoutPlanServiceModel = mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan);

        workoutPlanServiceModel.setIsLiked(isWorkoutPlanLiked(id, workoutPlanLikes));

        workoutPlanServiceModel.setComments(workoutPlan
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

        return workoutPlanServiceModel;
    }


    private WorkoutPlanServiceModel mapWorkoutPlanToWorkoutPlanServiceModel(WorkoutPlan workoutPlan) {

        WorkoutPlanServiceModel model = modelMapper.map(workoutPlan, WorkoutPlanServiceModel.class);

        User user = userRepository.findByUserProfileId(workoutPlan.getUserProfile().getId())
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

        CreatorServiceModel creator = modelMapper.map(user, CreatorServiceModel.class);

        model.setCreator(creator);

        model.setLikesCount((long) workoutPlan.getLikes().size());

        model.setWorkouts(workoutPlan.getWorkouts()
                .stream()
                .sorted(Comparator.comparing(WorkoutPlanWorkout::getOrderIndex))
                .map(this::mapWorkoutPlanWorkoutToServiceModel)
                .collect(Collectors.toList()));

        return model;
    }

    private WorkoutPlanWorkoutServiceModel mapWorkoutPlanWorkoutToServiceModel(WorkoutPlanWorkout workout) {

        WorkoutPlanWorkoutServiceModel model = modelMapper.map(workout, WorkoutPlanWorkoutServiceModel.class);

        model.setWorkout(workoutService.mapWorkoutToWorkoutServiceModel(workout.getWorkout()));

        return model;

    }

    public byte[] exportWorkoutPlanToExcel(String workoutPlanId) {

        WorkoutPlan workoutPlan = workoutPlanRepository
                .findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        return fileExporterService
                .exportWorkoutPlanToExcel(
                        mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan));

    }

    @Override
    @Transactional
    public WorkoutPlanServiceModel likeWorkoutPlan(String workoutPlanId, String username) {

        UserProfile userProfile = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile();

        WorkoutPlan workoutPlan = workoutPlanRepository
                .findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        Optional<WorkoutPlanLike> likeOptional = workoutPlan.getLikes()
                .stream()
                .filter(l -> l.getUserProfile().equals(userProfile))
                .findFirst();


        boolean liked = false;

        if (likeOptional.isEmpty()) {

            WorkoutPlanLike like = new WorkoutPlanLike();
            like.setUserProfile(userProfile);
            like.setWorkoutPlan(workoutPlan);
            liked = true;
            workoutPlanLikeRepository.save(like);

            workoutPlan.getLikes().add(like);
            workoutPlanRepository.save(workoutPlan);
        } else {

            WorkoutPlanLike workoutPlanLike = likeOptional.get();

            workoutPlanLike.setWorkoutPlan(null);
            workoutPlanLike.setUserProfile(null);

            workoutPlan.getLikes().remove(workoutPlanLike);
            workoutPlanRepository.save(workoutPlan);
            workoutPlanLikeRepository.deleteById(workoutPlanLike.getId());
        }


        WorkoutPlanServiceModel workoutPlanServiceModel = mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan);
        workoutPlanServiceModel.setIsLiked(liked);

        return workoutPlanServiceModel;
    }

    @Override
    public CommentServiceModel commentWorkoutPlan(String workoutPlanId, CommentServiceModel model, String username) {

        validationService.validate(model);

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        WorkoutPlan workoutPlan = workoutPlanRepository
                .findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));


        WorkoutPlanComment workoutPlanComment = modelMapper.map(model, WorkoutPlanComment.class);
        workoutPlanComment.setPostedOn(LocalDateTime.now());
        workoutPlanComment.setWorkoutPlan(workoutPlan);
        workoutPlanComment.setUserProfile(user.getUserProfile());

        workoutPlanCommentRepository.save(workoutPlanComment);

        CommentServiceModel comment = modelMapper.map(workoutPlanComment, CommentServiceModel.class);
        comment.setUsername(username);
        comment.setProfilePictureURL(user.getUserProfile().getProfilePictureURL());

        return comment;
    }

    @Override
    @Transactional
    public void deleteWorkoutPlanComment(String commentId, String username) {

        WorkoutPlanComment comment = workoutPlanCommentRepository.findById(commentId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_COMMENT_WITH_GIVEN_ID));

        UserRole moderatorRole = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_MODERATOR);

        WorkoutPlan workoutPlan = comment.getWorkoutPlan();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        if (!user.getAuthorities().contains(moderatorRole) &&
                !workoutPlan.getUserProfile().getId().equals(user.getUserProfile().getId()) &&
                !comment.getUserProfile().getId().equals(user.getUserProfile().getId())) {

            throw new NoPrivilegesException(ErrorConstants.NO_PRESENT_PRIVILEGES_DELETE_COMMENT);
        }

        comment.setUserProfile(null);
        comment.setWorkoutPlan(null);


        workoutPlanCommentRepository.deleteById(comment.getId());
    }

    @Override
    public CommentInfoServiceModel getCommentInfoByWorkoutPlanId(String workoutPlanId, String username) {
        WorkoutPlan workoutPlan = workoutPlanRepository
                .findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_PLAN_WITH_GIVEN_ID));

        User workoutPlanOwnerUser = userRepository
                .findByUserProfileId(workoutPlan.getUserProfile().getId())
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

        CommentInfoServiceModel model = new CommentInfoServiceModel();
        model.setCommentatorUsername(username);
        model.setOwnerFirstName(workoutPlan.getUserProfile().getFirstName());
        model.setOwnerUsername(workoutPlanOwnerUser.getUsername());
        model.setOwnerEmail(workoutPlanOwnerUser.getEmail());
        model.setEntityType(TypeConstants.WORKOUT_PLAN);
        model.setEntityName(workoutPlan.getName());

        return model;
    }
}
