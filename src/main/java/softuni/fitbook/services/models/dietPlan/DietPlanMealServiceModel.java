package softuni.fitbook.services.models.dietPlan;

import softuni.fitbook.services.models.meal.MealServiceModel;

public class DietPlanMealServiceModel {

    private String id;
    private Integer orderIndex;
    private MealServiceModel meal;

    public DietPlanMealServiceModel() {
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

    public MealServiceModel getMeal() {
        return meal;
    }

    public void setMeal(MealServiceModel meal) {
        this.meal = meal;
    }
}
