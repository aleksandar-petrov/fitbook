package softuni.fitbook.services.models.meal;

public class MealFoodCreateServiceModel {

    private Integer serving;
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
