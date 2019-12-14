package softuni.fitbook.services;


import softuni.fitbook.services.models.CommentInfoServiceModel;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;

import java.util.List;

public interface DietPlanService {

    DietPlanServiceModel createDietPlan(DietPlanCreateServiceModel model, String username);

    DietPlanServiceModel addMealFromMyMealsToMyDietPlan(String dietPlanId, String mealId, String username);

    List<DietPlanServiceModel> getAllDietPlansByUsername(String username);

    void deleteMyDietPlanById(String dietPlanId, String username);

    DietPlanServiceModel editMyDietPlanById(String dietPlanId, DietPlanServiceModel model, String username);

    List<DietPlanServiceModel> getAllPublicDietPlans(String username);

    DietPlanServiceModel copyDietPlanToLoggedUserDietPlans(String dietPlanId, String username);

    DietPlanServiceModel getDietPlanById(String id, String username);

    byte[] exportDietPlanToExcel(String dietPlanId);

    DietPlanServiceModel likeDietPlan(String dietPlanId, String username);

    CommentServiceModel commentDietPlan(String dietPlanId, CommentServiceModel model, String username);

    void deleteDietPlanComment(String commentId, String username);

    CommentInfoServiceModel getCommentInfoByDietPlanId(String dietPlanId, String username);

}
