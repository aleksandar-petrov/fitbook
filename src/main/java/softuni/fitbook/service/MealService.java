package softuni.fitbook.service;

import softuni.fitbook.domain.entities.Meal;
import softuni.fitbook.domain.models.service.meal.MealCreateServiceModel;
import softuni.fitbook.domain.models.service.meal.MealFoodCreateServiceModel;
import softuni.fitbook.domain.models.service.meal.MealServiceModel;

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
}
