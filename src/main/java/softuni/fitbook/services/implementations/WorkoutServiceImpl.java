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
import softuni.fitbook.services.models.workout.*;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.services.ExerciseService;
import softuni.fitbook.services.WorkoutService;
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
public class WorkoutServiceImpl implements WorkoutService {

    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;
    private final WorkoutExercisesRepository workoutExerciseRepository;
    private final WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository;
    private final ExerciseRepository exerciseRepository;
    private final ExerciseService exerciseService;
    private final ModelMapper modelMapper;
    private final WorkoutLikeRepository workoutLikeRepository;
    private final WorkoutCommentRepository workoutCommentRepository;
    private final RoleRepository roleRepository;
    private final ValidationService validationService;

    @Autowired
    public WorkoutServiceImpl(WorkoutRepository workoutRepository, UserRepository userRepository, WorkoutExercisesRepository workoutExercisesRepository, WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository, ExerciseRepository exerciseRepository, ExerciseService exerciseService, ModelMapper modelMapper, WorkoutLikeRepository workoutLikeRepository, WorkoutCommentRepository workoutCommentRepository, RoleRepository roleRepository, ValidationService validationService) {
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
        this.workoutExerciseRepository = workoutExercisesRepository;
        this.workoutPlanWorkoutRepository = workoutPlanWorkoutRepository;
        this.exerciseRepository = exerciseRepository;
        this.exerciseService = exerciseService;
        this.modelMapper = modelMapper;
        this.workoutLikeRepository = workoutLikeRepository;
        this.workoutCommentRepository = workoutCommentRepository;
        this.roleRepository = roleRepository;
        this.validationService = validationService;
    }

    @Override
    public WorkoutServiceModel createWorkout(WorkoutCreateServiceModel model, String username) {

        validationService.validate(model);

        Workout workout = modelMapper.map(model, Workout.class);

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME)
        );

        workout.setUserProfile(user.getUserProfile());
        workout.setIsCopied(false);

        workout = workoutRepository.save(workout);

        return modelMapper.map(workout, WorkoutServiceModel.class);
    }

    @Override
    public WorkoutServiceModel addWorkoutExerciseToWorkout(WorkoutExerciseCreateServiceModel model, String workoutId, String username) {


        Workout workout = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));


        WorkoutExercise workoutExercise = modelMapper.map(model, WorkoutExercise.class);

        Exercise exercise = exerciseRepository.findById(model.getExerciseId())
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_EXERCISE_WITH_GIVEN_ID));

        workoutExercise.setExercise(exercise);
        workoutExercise.setOrderIndex(workout.getExercises().size());

        workoutExercise = workoutExerciseRepository.save(workoutExercise);


        workout.getExercises().add(workoutExercise);

        workoutExercise.setOrderIndex(workout.getExercises().size());

        workoutRepository.save(workout);

        return mapWorkoutToWorkoutServiceModel(workout);

    }

    @Override
    public List<WorkoutServiceModel> getAllWorkoutsByUsername(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new NotFoundException("No such user with given ID."));


        return user.getUserProfile().getWorkouts()
                .stream()
                .map(this::mapWorkoutToWorkoutServiceModel)
                .collect(Collectors.toList());

    }

    @Override
    @Transactional
    public WorkoutServiceModel deleteWorkoutExerciseFromWorkout(String workoutId, String exerciseId, String username) {
        Workout workout = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        WorkoutExercise workoutExercise = workout.getExercises()
                .stream()
                .filter(e -> e.getId().equals(exerciseId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_EXERCISE_WITH_GIVEN_ID));

        workout.getExercises().remove(workoutExercise);

        workoutRepository.save(workout);

        workoutExerciseRepository.delete(workoutExercise);

        Workout updated = getWorkoutWithRearrangedWorkoutExerciseOrderIndexes(workout);

        workoutRepository.save(updated);

        return mapWorkoutToWorkoutServiceModel(workout);


    }

    private Workout getWorkoutWithRearrangedWorkoutExerciseOrderIndexes(Workout workout) {


        List<WorkoutExercise> exercises = workout.getExercises();

        for (int i = 0; i < exercises.size(); i++) {
            exercises.get(i).setOrderIndex(i + 1);
        }

        workout.setExercises(exercises);

        return workout;
    }

    @Override
    @Transactional
    public void deleteWorkoutById(String workoutId, String username) {

        UserProfile userProfile = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile();

        Workout workout = userProfile
                .getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        workoutPlanWorkoutRepository.findAllByWorkoutId(workoutId)
                .forEach(wpw -> {
                    wpw.setWorkout(null);
                    wpw.setWorkoutPlan(null);
                    workoutPlanWorkoutRepository.deleteById(wpw.getId());
                });

        workout.getExercises()
                .forEach(e -> {
                    e.setExercise(null);
                    workoutExerciseRepository.delete(e);
                });

        workout.getLikes()
                .forEach(like -> {
                    like.setUserProfile(null);
                    like.setWorkout(null);
                    workoutLikeRepository.delete(like);
                });

        workout.getComments()
                .forEach(comment -> {
                    comment.setUserProfile(null);
                    comment.setWorkout(null);
                    workoutCommentRepository.delete(comment);
                });

        userProfile.getWorkouts().remove(workout);

    }

    @Override
    @Transactional
    public WorkoutServiceModel editWorkoutById(String workoutId, WorkoutServiceModel model, String username) {

        validationService.validate(model);

        Workout oldWorkout = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile()
                .getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        Workout editedWorkout = modelMapper.map(model, Workout.class);


        oldWorkout.setName(editedWorkout.getName());

        if (!oldWorkout.getIsCopied()) {
            oldWorkout.setIsPublic(editedWorkout.getIsPublic());
        }


        List<WorkoutExercise> oldExercises = oldWorkout.getExercises();

        List<WorkoutExercise> newExercises = editedWorkout.getExercises();

        List<WorkoutExercise> exercisesToRemove = new ArrayList<>();

        for (WorkoutExercise oldExercise : oldExercises) {

            WorkoutExercise editedWorkoutExercise = newExercises
                    .stream()
                    .filter(w -> w.getId().equals(oldExercise.getId()))
                    .findFirst().orElse(null);

            if (editedWorkoutExercise == null) {
                exercisesToRemove.add(oldExercise);
            } else {
                oldExercise.setOrderIndex(editedWorkoutExercise.getOrderIndex());
                oldExercise.setReps(editedWorkoutExercise.getReps());
                oldExercise.setSets(editedWorkoutExercise.getSets());
            }
        }

        exercisesToRemove.forEach(w -> {
            w.setExercise(null);
        });

        oldExercises.removeAll(exercisesToRemove);


        exercisesToRemove.
                forEach(e -> workoutExerciseRepository.deleteById(e.getId()));


        oldWorkout = workoutRepository.save(oldWorkout);

        return mapWorkoutToWorkoutServiceModel(oldWorkout);
    }

    @Override
    public List<WorkoutServiceModel> getAllPublicWorkouts(String username) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        List<WorkoutLike> workoutLikes = user.getUserProfile().getWorkoutLikes();

        return workoutRepository.findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(workout -> {
                    WorkoutServiceModel workoutServiceModel = mapWorkoutToWorkoutServiceModel(workout);
                    workoutServiceModel.setIsLiked(isWorkoutLiked(workout.getId(), workoutLikes));
                    return workoutServiceModel;
                })
                .collect(Collectors.toList());
    }

    private Boolean isWorkoutLiked(String workoutId, List<WorkoutLike> likes) {

        return !likes.isEmpty() && likes
                .stream()
                .anyMatch(l -> l.getWorkout().getId().equals(workoutId));

    }

    @Override
    public WorkoutServiceModel copyWorkoutToLoggedUserWorkouts(String workoutId, String username) {

        User user = userRepository.findByUsername(username).orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        Workout workout = workoutRepository.findById(workoutId).orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        Workout copy = getWorkoutCopy(workout);
        copy.setUserProfile(user.getUserProfile());

        copy = workoutRepository.save(copy);

        return mapWorkoutToWorkoutServiceModel(copy);
    }

    @Override
    public WorkoutServiceModel getWorkoutById(String id, String username) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        List<WorkoutLike> workoutLikes = user.getUserProfile().getWorkoutLikes();


        Workout workout = workoutRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));


        WorkoutServiceModel workoutServiceModel = mapWorkoutToWorkoutServiceModel(workout);

        workoutServiceModel.setIsLiked(isWorkoutLiked(id, workoutLikes));

        workoutServiceModel.setComments(workout
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

        return workoutServiceModel;

    }

    @Override
    @Transactional
    public WorkoutServiceModel likeWorkout(String workoutId, String username) {

        UserProfile userProfile = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME))
                .getUserProfile();

        Workout workout = workoutRepository
                .findById(workoutId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        Optional<WorkoutLike> likeOptional = workout.getLikes()
                .stream()
                .filter(l -> l.getUserProfile().equals(userProfile))
                .findFirst();


        boolean liked = false;

        if (likeOptional.isEmpty()) {

            WorkoutLike like = new WorkoutLike();
            like.setUserProfile(userProfile);
            like.setWorkout(workout);
            liked = true;
            workoutLikeRepository.save(like);

            workout.getLikes().add(like);
            workoutRepository.save(workout);
        } else {

            WorkoutLike workoutLike = likeOptional.get();

            workoutLike.setWorkout(null);
            workoutLike.setUserProfile(null);

            workout.getLikes().remove(workoutLike);
            workoutRepository.save(workout);
            workoutLikeRepository.deleteById(workoutLike.getId());
        }


        WorkoutServiceModel workoutServiceModel = mapWorkoutToWorkoutServiceModel(workout);
        workoutServiceModel.setIsLiked(liked);

        return workoutServiceModel;
    }

    @Override
    public CommentServiceModel commentWorkout(String workoutId, CommentServiceModel model, String username) {

        validationService.validate(model);

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        Workout workout = workoutRepository
                .findById(workoutId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));


        WorkoutComment workoutComment = modelMapper.map(model, WorkoutComment.class);
        workoutComment.setPostedOn(LocalDateTime.now());
        workoutComment.setWorkout(workout);
        workoutComment.setUserProfile(user.getUserProfile());

        workoutCommentRepository.save(workoutComment);

        CommentServiceModel comment = modelMapper.map(workoutComment, CommentServiceModel.class);
        comment.setUsername(username);
        comment.setProfilePictureURL(user.getUserProfile().getProfilePictureURL());

        return comment;
    }

    @Override
    @Transactional
    public void deleteWorkoutComment(String commentId, String username) {
        WorkoutComment comment = workoutCommentRepository.findById(commentId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_COMMENT_WITH_GIVEN_ID));

        UserRole moderatorRole = roleRepository.getByAuthority(AuthorityConstants.AUTHORITY_MODERATOR);

        Workout workout = comment.getWorkout();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USERNAME));

        if (!user.getAuthorities().contains(moderatorRole) &&
                !workout.getUserProfile().getId().equals(user.getUserProfile().getId()) &&
                !comment.getUserProfile().getId().equals(user.getUserProfile().getId())) {

            throw new NoPrivilegesException(ErrorConstants.NO_PRESENT_PRIVILEGES_DELETE_COMMENT);
        }

        comment.setUserProfile(null);
        comment.setWorkout(null);


        workoutCommentRepository.deleteById(comment.getId());

    }

    @Override
    public CommentInfoServiceModel getCommentInfoByWorkoutId(String workoutId, String username) {

        Workout workout = workoutRepository
                .findById(workoutId)
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_WORKOUT_WITH_GIVEN_ID));

        User workoutOwnerUser = userRepository
                .findByUserProfileId(workout.getUserProfile().getId())
                .orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID));

        CommentInfoServiceModel model = new CommentInfoServiceModel();
        model.setCommentatorUsername(username);
        model.setOwnerFirstName(workout.getUserProfile().getFirstName());
        model.setOwnerUsername(workoutOwnerUser.getUsername());
        model.setOwnerEmail(workoutOwnerUser.getEmail());
        model.setEntityType(TypeConstants.WORKOUT);
        model.setEntityName(workout.getName());

        return model;

    }

    public Workout getWorkoutCopy(Workout source) {

        Workout workout = new Workout();
        workout.setName(source.getName() + " - Copy");
        workout.setIsCopied(true);
        workout.setIsPublic(false);
        workout.setLikes(new ArrayList<>());
        workout.setComments(new ArrayList<>());
        List<WorkoutExercise> exercises = source.getExercises()
                .stream()
                .map(e -> {
                    WorkoutExercise exercise = new WorkoutExercise();
                    exercise.setOrderIndex(e.getOrderIndex());
                    exercise.setExercise(e.getExercise());
                    exercise.setReps(e.getReps());
                    exercise.setSets(e.getSets());

                    return exercise;
                }).collect(Collectors.toList());

        workout.setExercises(exercises);

        return workout;

    }

    public WorkoutServiceModel mapWorkoutToWorkoutServiceModel(Workout workout) {

        WorkoutServiceModel model = modelMapper.map(workout, WorkoutServiceModel.class);
        CreatorServiceModel creator = modelMapper.map(userRepository.findByUserProfileId(workout.getUserProfile().getId()).orElseThrow(() -> new NotFoundException(ErrorConstants.NO_SUCH_USER_WITH_GIVEN_USER_PROFILE_ID)), CreatorServiceModel.class);
        model.setCreator(creator);

        model.setLikesCount((long) workout.getLikes().size());

        model.setExercises(workout.getExercises()
                .stream()
                .map(this::mapWorkoutExerciseToWorkoutExerciseServiceModel)
                .collect(Collectors.toList()));

        model.getExercises().sort(Comparator.comparing(WorkoutExerciseServiceModel::getOrderIndex));
        return model;

    }

    private WorkoutExerciseServiceModel mapWorkoutExerciseToWorkoutExerciseServiceModel(WorkoutExercise workoutExercise) {

        WorkoutExerciseServiceModel model = modelMapper.map(workoutExercise, WorkoutExerciseServiceModel.class);
        model.setExercise(exerciseService.getExerciseServiceModelFromExercise(workoutExercise.getExercise()));

        return model;
    }
}
