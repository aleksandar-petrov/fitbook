package softuni.fitbook.service;

import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.models.service.workout.WorkoutCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;

import java.util.List;

public interface WorkoutService {

  WorkoutServiceModel createWorkout(WorkoutCreateServiceModel model, String username);

  WorkoutServiceModel addWorkoutExerciseToWorkout(WorkoutExerciseCreateServiceModel model, String workoutId);

  List<WorkoutServiceModel> getAllWorkoutsByUsername(String username);

    WorkoutServiceModel deleteWorkoutExerciseFromWorkout(String workoutId, String exerciseId);

  void deleteWorkoutById(String workoutId);

    WorkoutServiceModel editWorkoutById(String workoutId, WorkoutServiceModel model);

    List<WorkoutServiceModel> getAllPublicWorkouts();

  WorkoutServiceModel copyWorkoutToLoggedUserWorkouts(String workoutId, String username);

  WorkoutServiceModel getWorkoutById(String id);

  WorkoutServiceModel mapWorkoutToWorkoutServiceModel(Workout workout);

  Workout getWorkoutCopy(Workout source);
}
