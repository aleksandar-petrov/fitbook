package softuni.fitbook.services;

import softuni.fitbook.data.models.Meal;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.meal.MealCreateServiceModel;
import softuni.fitbook.services.models.meal.MealFoodCreateServiceModel;
import softuni.fitbook.services.models.meal.MealServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;

import java.util.List;


public interface MealService {

    MealServiceModel createMeal(MealCreateServiceModel model, String username);

    MealServiceModel addMealFoodToMeal(MealFoodCreateServiceModel model, String mealId, String username);

    List<MealServiceModel> getAllMealsByUsername(String username);


    void deleteMealById(String mealId, String username);

    MealServiceModel editMealById(String mealId, MealServiceModel model, String username);

    List<MealServiceModel> getAllPublicMeals();

    MealServiceModel copyMealToLoggedUserMeals(String mealId, String username);

    MealServiceModel getMealById(String id);

    MealServiceModel mapMealToMealServiceModel(Meal meal);

    Meal getMealCopy(Meal source);

    MealServiceModel likeMeal(String mealId, String username);

    CommentServiceModel commentMeal(String mealId, CommentRequestModel model, String name);

    void deleteMealComment(String commentId, String username);
}
