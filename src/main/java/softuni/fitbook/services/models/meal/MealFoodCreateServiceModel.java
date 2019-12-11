package softuni.fitbook.services.models.meal;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class MealFoodCreateServiceModel {

    @NotNull
    @Min(1)
    private Integer serving;

    @NotBlank
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
