package softuni.fitbook.service;

import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.models.service.workout.WorkoutCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;

import java.util.List;

public interface WorkoutService {

  WorkoutServiceModel createWorkout(WorkoutCreateServiceModel model, String username);

  WorkoutServiceModel addWorkoutExerciseToWorkout(WorkoutExerciseCreateServiceModel model, String workoutId, String username);

  List<WorkoutServiceModel> getAllWorkoutsByUsername(String username);

    WorkoutServiceModel deleteWorkoutExerciseFromWorkout(String workoutId, String exerciseId, String username);

  void deleteWorkoutById(String workoutId, String username);

    WorkoutServiceModel editWorkoutById(String workoutId, WorkoutServiceModel model, String username);

    List<WorkoutServiceModel> getAllPublicWorkouts();

  WorkoutServiceModel copyWorkoutToLoggedUserWorkouts(String workoutId, String username);

  WorkoutServiceModel getWorkoutById(String id);

  WorkoutServiceModel mapWorkoutToWorkoutServiceModel(Workout workout);

  Workout getWorkoutCopy(Workout source);
}
