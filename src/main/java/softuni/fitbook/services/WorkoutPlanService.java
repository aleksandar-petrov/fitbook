package softuni.fitbook.services;

import softuni.fitbook.services.models.CommentInfoServiceModel;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;

import java.util.List;

public interface WorkoutPlanService {

    WorkoutPlanServiceModel createWorkoutPlan(WorkoutPlanCreateServiceModel model, String username);

    WorkoutPlanServiceModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(String workoutPlanId, String workoutId, String username);

    List<WorkoutPlanServiceModel> getAllWorkoutPlansByUsername(String username);


    void deleteMyWorkoutPlanById(String workoutPlanId, String username);

    WorkoutPlanServiceModel editMyWorkoutPlanById(String workoutPlanId, WorkoutPlanServiceModel model, String username);

    List<WorkoutPlanServiceModel> getAllPublicWorkoutPlans(String username);

    WorkoutPlanServiceModel copyWorkoutPlanToLoggedUserWorkoutPlans(String workoutPlanId, String username);

    WorkoutPlanServiceModel getWorkoutPlanById(String id, String username);

    byte[] exportWorkoutPlanToExcel(String workoutPlanId);

    WorkoutPlanServiceModel likeWorkoutPlan(String workoutPlanId, String username);

    CommentServiceModel commentWorkoutPlan(String workoutPlanId, CommentServiceModel model, String username);

    void deleteWorkoutPlanComment(String commentId, String username);

    CommentInfoServiceModel getCommentInfoByWorkoutPlanId(String workoutPlanId, String username);
}
