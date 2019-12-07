package softuni.fitbook.services;

import softuni.fitbook.services.models.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;

import java.util.List;

public interface WorkoutPlanService {

    WorkoutPlanServiceModel createWorkoutPlan(WorkoutPlanCreateServiceModel model, String username);

    WorkoutPlanServiceModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(String workoutPlanId, String workoutId, String username);

    List<WorkoutPlanServiceModel> getAllWorkoutPlansByUsername(String username);


    void deleteMyWorkoutPlanById(String workoutPlanId, String username);

    WorkoutPlanServiceModel editMyWorkoutPlanById(String workoutPlanId, WorkoutPlanServiceModel model, String username);

    List<WorkoutPlanServiceModel> getAllPublicWorkoutPlans();

    WorkoutPlanServiceModel copyWorkoutPlanToLoggedUserWorkoutPlans(String workoutPlanId, String username);

    WorkoutPlanServiceModel getWorkoutPlanById(String id);

    byte[] exportWorkoutPlanToExcel(String workoutPlanId);
}
