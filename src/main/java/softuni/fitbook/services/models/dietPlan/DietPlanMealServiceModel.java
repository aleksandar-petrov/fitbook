package softuni.fitbook.services.models.dietPlan;

import softuni.fitbook.common.constants.ValidationConstants;
import softuni.fitbook.services.models.meal.MealServiceModel;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DietPlanMealServiceModel {

    @NotBlank(message = ValidationConstants.ID_REQUIRED)
    private String id;

    @NotNull(message = ValidationConstants.ORDER_INDEX_REQUIRED)
    private Integer orderIndex;

    @NotNull(message = ValidationConstants.MEAL_REQUIRED)
    @Valid
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
