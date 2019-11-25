package softuni.fitbook.service;

import softuni.fitbook.domain.models.service.workout.WorkoutCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanServiceModel;

import java.util.List;

public interface WorkoutPlanService {

    WorkoutPlanServiceModel createWorkout(WorkoutPlanCreateServiceModel model, String username);

    WorkoutPlanServiceModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(String workoutPlanId, String workoutId, String username);

    List<WorkoutPlanServiceModel> getAllWorkoutPlansByUsername(String username);

    WorkoutPlanServiceModel deleteWorkoutFromMyWorkoutPlan(String workoutPlanId, String workoutId, String username);

    void deleteMyWorkoutPlanById(String workoutPlanId, String username);

    WorkoutPlanServiceModel editMyWorkoutPlanById(String workoutPlanId, WorkoutPlanServiceModel model, String username);

    List<WorkoutPlanServiceModel> getAllPublicWorkoutPlans();

    WorkoutPlanServiceModel copyWorkoutToLoggedUserWorkoutPlans(String workoutPlanId, String username);

    WorkoutPlanServiceModel getWorkoutPlanById(String id);
}