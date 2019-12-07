package softuni.fitbook.web.controllers.models.request.dietPlan;

import softuni.fitbook.web.controllers.models.request.meal.MealEditRequestModel;

public class DietPlanMealEditRequestModel {

    private String id;
    private Integer orderIndex;
    private MealEditRequestModel meal;

    public DietPlanMealEditRequestModel() {
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

    public MealEditRequestModel getMeal() {
        return meal;
    }

    public void setMeal(MealEditRequestModel meal) {
        this.meal = meal;
    }
}
