package softuni.fitbook.web.controllers.models.response.dietPlan;

import softuni.fitbook.web.controllers.models.response.meal.MealResponseModel;

public class DietPlanMealResponseModel {

    private String id;
    private Integer orderIndex;
    private MealResponseModel meal;

    public DietPlanMealResponseModel() {
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

    public MealResponseModel getMeal() {
        return meal;
    }

    public void setMeal(MealResponseModel meal) {
        this.meal = meal;
    }
}
