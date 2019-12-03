package softuni.fitbook.domain.models.binding.dietPlan;

import softuni.fitbook.domain.models.binding.meal.MealEditBindingModel;
import softuni.fitbook.domain.models.binding.workout.WorkoutEditBindingModel;

public class DietPlanMealEditBindingModel {

    private String id;
    private Integer orderIndex;
    private MealEditBindingModel meal;

    public DietPlanMealEditBindingModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    public MealEditBindingModel getMeal() {
        return meal;
    }

    public void setMeal(MealEditBindingModel meal) {
        this.meal = meal;
    }
}
