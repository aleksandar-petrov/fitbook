package softuni.fitbook.web.controllers.models.request.meal;

public class MealFoodRequestModel {

    private Integer serving;
    private String foodId;

    public MealFoodRequestModel() {
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
