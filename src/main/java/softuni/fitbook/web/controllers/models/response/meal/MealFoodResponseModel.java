package softuni.fitbook.web.controllers.models.response.meal;

import softuni.fitbook.services.models.food.FoodServiceModel;

public class MealFoodResponseModel {

    private String id;
    private Integer serving;
    private FoodServiceModel food;
    private Integer proteinPerServing;
    private Integer carbohydratesPerServing;
    private Integer fatsPerServing;
    private Integer caloriesPerServing;

    public MealFoodResponseModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getServing() {
        return serving;
    }

    public void setServing(Integer serving) {
        this.serving = serving;
    }

    public FoodServiceModel getFood() {
        return food;
    }

    public void setFood(FoodServiceModel food) {
        this.food = food;
    }

    public Integer getProteinPerServing() {
        return proteinPerServing;
    }

    public void setProteinPerServing(Integer proteinPerServing) {
        this.proteinPerServing = proteinPerServing;
    }

    public Integer getCarbohydratesPerServing() {
        return carbohydratesPerServing;
    }

    public void setCarbohydratesPerServing(Integer carbohydratesPerServing) {
        this.carbohydratesPerServing = carbohydratesPerServing;
    }

    public Integer getFatsPerServing() {
        return fatsPerServing;
    }

    public void setFatsPerServing(Integer fatsPerServing) {
        this.fatsPerServing = fatsPerServing;
    }

    public Integer getCaloriesPerServing() {
        return caloriesPerServing;
    }

    public void setCaloriesPerServing(Integer caloriesPerServing) {
        this.caloriesPerServing = caloriesPerServing;
    }

}
