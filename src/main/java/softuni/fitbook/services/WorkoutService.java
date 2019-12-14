package softuni.fitbook.services;

import softuni.fitbook.data.models.Workout;
import softuni.fitbook.services.models.CommentInfoServiceModel;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.workout.WorkoutCreateServiceModel;
import softuni.fitbook.services.models.workout.WorkoutExerciseCreateServiceModel;
import softuni.fitbook.services.models.workout.WorkoutServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;

import java.util.List;

public interface WorkoutService {

    WorkoutServiceModel createWorkout(WorkoutCreateServiceModel model, String username);

    WorkoutServiceModel addWorkoutExerciseToWorkout(WorkoutExerciseCreateServiceModel model, String workoutId, String username);

    List<WorkoutServiceModel> getAllWorkoutsByUsername(String username);

    WorkoutServiceModel deleteWorkoutExerciseFromWorkout(String workoutId, String exerciseId, String username);

    void deleteWorkoutById(String workoutId, String username);

    WorkoutServiceModel editWorkoutById(String workoutId, WorkoutServiceModel model, String username);

    List<WorkoutServiceModel> getAllPublicWorkouts(String username);

    WorkoutServiceModel copyWorkoutToLoggedUserWorkouts(String workoutId, String username);

    WorkoutServiceModel getWorkoutById(String id, String username);

    WorkoutServiceModel mapWorkoutToWorkoutServiceModel(Workout workout);

    Workout getWorkoutCopy(Workout source);

    WorkoutServiceModel likeWorkout(String workoutId, String username);

    CommentServiceModel commentWorkout(String workoutId, CommentServiceModel model, String username);

    void deleteWorkoutComment(String commentId, String username);

    CommentInfoServiceModel getCommentInfoByWorkoutId(String workoutId, String username);
}
