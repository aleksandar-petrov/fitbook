package softuni.fitbook.domain.models.binding.meal;

public class MealFoodBindingModel {

    private Integer serving;
    private String foodId;

    public MealFoodBindingModel() {
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
