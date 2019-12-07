package softuni.fitbook.services;


import softuni.fitbook.services.models.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;

import java.util.List;

public interface DietPlanService {

    DietPlanServiceModel createDietPlan(DietPlanCreateServiceModel model, String username);

    DietPlanServiceModel addMealFromMyMealsToMyDietPlan(String dietPlanId, String mealId, String username);

    List<DietPlanServiceModel> getAllDietPlansByUsername(String username);

    void deleteMyDietPlanById(String dietPlanId, String username);

    DietPlanServiceModel editMyDietPlanById(String dietPlanId, DietPlanServiceModel model, String username);

    List<DietPlanServiceModel> getAllPublicDietPlans();

    DietPlanServiceModel copyDietPlanToLoggedUserDietPlans(String dietPlanId, String username);

    DietPlanServiceModel getDietPlanById(String id);

    byte[] exportDietPlanToExcel(String dietPlanId);

}
