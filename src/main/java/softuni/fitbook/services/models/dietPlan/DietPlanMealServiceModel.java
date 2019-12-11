package softuni.fitbook.services.models.dietPlan;

import softuni.fitbook.services.models.meal.MealServiceModel;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DietPlanMealServiceModel {

    @NotBlank
    private String id;

    @NotNull
    private Integer orderIndex;

    @NotNull
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
