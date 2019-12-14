package softuni.fitbook.services.models.meal;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class MealFoodCreateServiceModel {

    @NotNull(message = ValidationConstants.SERVING_REQUIRED)
    @Min(value = 1, message = ValidationConstants.SERVING_POSITIVE_NUMBER)
    private Integer serving;

    @NotBlank(message = ValidationConstants.FOOD_ID_REQUIRED)
    private String foodId;

    public MealFoodCreateServiceModel() {
    }

    public Integer getServing() {
        return serving;
    }

    public void setServing(Integer serving) {
        this.serving = serving;
    }

    public String getFoodId() {
        return foodId;
    }

    public void setFoodId(String foodId) {
        this.foodId = foodId;
    }
}
