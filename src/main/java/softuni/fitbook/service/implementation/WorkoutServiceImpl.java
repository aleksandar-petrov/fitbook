package softuni.fitbook.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import softuni.fitbook.domain.entities.Exercise;
import softuni.fitbook.domain.entities.User;
import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.entities.WorkoutExercise;
import softuni.fitbook.domain.models.service.CreatorServiceModel;
import softuni.fitbook.domain.models.service.workout.*;
import softuni.fitbook.repository.ExerciseRepository;
import softuni.fitbook.repository.UserRepository;
import softuni.fitbook.repository.WorkoutExercisesRepository;
import softuni.fitbook.repository.WorkoutRepository;
import softuni.fitbook.service.WorkoutService;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WorkoutServiceImpl implements WorkoutService {

    private final WorkoutRepository workoutRepository;
    private final UserRepository userRepository;
    private final WorkoutExercisesRepository workoutExercisesRepository;
    private final ExerciseRepository exerciseRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public WorkoutServiceImpl(WorkoutRepository workoutRepository, UserRepository userRepository, WorkoutExercisesRepository workoutExercisesRepository, ExerciseRepository exerciseRepository, ModelMapper modelMapper) {
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
        this.workoutExercisesRepository = workoutExercisesRepository;
        this.exerciseRepository = exerciseRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public WorkoutServiceModel createWorkout(WorkoutCreateServiceModel model, String username) {


        Workout workout = modelMapper.map(model, Workout.class);

        User user = this.userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("No such user.")
        );

        workout.setUserProfile(user.getUserProfile());
        workout.setIsCopied(false);

        workout = workoutRepository.save(workout);

        return modelMapper.map(workout, WorkoutServiceModel.class);
    }

    @Override
    public WorkoutServiceModel addWorkoutExerciseToWorkout(WorkoutExerciseCreateServiceModel model, String workoutId) {

        WorkoutExercise workoutExercise = modelMapper.map(model, WorkoutExercise.class);

        Optional<Exercise> exerciseOptional = exerciseRepository.findById(model.getExerciseId());

        if (exerciseOptional.isEmpty()) {
            throw new IllegalArgumentException("No such exercise with provided ID.");
        }

        Exercise exercise = exerciseOptional.get();

        workoutExercise.setExercise(exercise);

        workoutExercise = workoutExercisesRepository.save(workoutExercise);

        Optional<Workout> workoutOptional = workoutRepository.findById(workoutId);

        if (workoutOptional.isEmpty()) {
            throw new IllegalArgumentException("No such workout with provided ID.");
        }

        Workout workout = workoutOptional.get();

        workout.getExercises().add(workoutExercise);

        workoutExercise.setOrderIndex(workout.getExercises().size());

        workoutRepository.save(workout);


        return modelMapper.map(workout, WorkoutServiceModel.class);

    }

    @Override
    public List<WorkoutServiceModel> getAllWorkoutsByUsername(String username) {
        User user = this.userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("No such user"));


        return user.getUserProfile().getWorkouts()
                .stream()
                .map(w -> modelMapper.map(w, WorkoutServiceModel.class))
                .collect(Collectors.toList());

    }

    @Override
    @Transactional
    public WorkoutServiceModel deleteWorkoutExerciseFromWorkout(String workoutId, String exerciseId) {
        Workout workout = this.workoutRepository.findById(workoutId).orElseThrow(() -> new IllegalArgumentException("No such workout with given ID."));

        WorkoutExercise workoutExercise = workout.getExercises()
                .stream()
                .filter(e -> e.getId().equals(exerciseId))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No such workout exercise with given ID."));

        workout.getExercises().remove(workoutExercise);

        this.workoutRepository.save(workout);

        this.workoutExercisesRepository.delete(workoutExercise);

        Workout updated = getWorkoutWithRearrangedWorkoutExerciseOrderIndexes(workout);

        this.workoutRepository.save(updated);

        return modelMapper.map(workout, WorkoutServiceModel.class);


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
    public void deleteWorkoutById(String workoutId) {
        this.workoutRepository.deleteById(workoutId);
    }

    @Override
    @Transactional
    public WorkoutServiceModel editWorkoutById(String workoutId, WorkoutServiceModel model) {

        Workout editedWorkout = modelMapper.map(model, Workout.class);

        Workout oldWorkout = workoutRepository.findById(workoutId).orElseThrow(() -> new IllegalArgumentException("No such workout with given ID."));




        List<WorkoutExercise> oldExercises = oldWorkout.getExercises();

        List<WorkoutExercise> newExercises = editedWorkout.getExercises();

        oldExercises.removeAll(newExercises);

        oldExercises.
                forEach(e -> workoutExercisesRepository.deleteById(e.getId()));

        editedWorkout.setUserProfile(oldWorkout.getUserProfile());

        editedWorkout.setIsCopied(oldWorkout.getIsCopied());

        if (oldWorkout.getIsCopied()) {
            editedWorkout.setIsPublic(false);
        }

        editedWorkout = workoutRepository.save(editedWorkout);

        return modelMapper.map(editedWorkout, WorkoutServiceModel.class);
    }

    @Override
    public List<WorkoutServiceModel> getAllPublicWorkouts() {
        List<WorkoutServiceModel> collect = this.workoutRepository.findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(w -> {

                    WorkoutServiceModel model = modelMapper.map(w, WorkoutServiceModel.class);
                    CreatorServiceModel creator = modelMapper.map(userRepository.findByUserProfileId(w.getUserProfile().getId()).orElseThrow(() -> new IllegalArgumentException("No such user with given User Profile ID.")), CreatorServiceModel.class);
                    model.setCreator(creator);
                    model.getExercises().sort(Comparator.comparing(WorkoutExerciseServiceModel::getOrderIndex));
                    return model;
                })
                .collect(Collectors.toList());

        return collect;
    }

    @Override
    public WorkoutServiceModel copyWorkoutToLoggedUserWorkouts(String workoutId, String username) {

        User user = this.userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("No such user"));

        Workout workout = workoutRepository.findById(workoutId).orElseThrow(() -> new IllegalArgumentException("No such workout with given ID."));

        Workout copy = getWorkoutCopy(workout);
        copy.setUserProfile(user.getUserProfile());

        copy = workoutRepository.save(copy);

        return modelMapper.map(copy, WorkoutServiceModel.class);
    }


    private Workout getWorkoutCopy(Workout source) {

        Workout workout = new Workout();
        workout.setName(source.getName() + " - Copy");
        workout.setIsCopied(true);
        workout.setIsPublic(false);
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

        exercises.forEach(e -> e.setId(null));
        workout.setExercises(exercises);

        return workout;


    }
}
