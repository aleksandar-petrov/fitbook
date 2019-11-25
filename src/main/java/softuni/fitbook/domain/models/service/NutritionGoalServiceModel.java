package softuni.fitbook.domain.models.service;

public class NutritionGoalServiceModel {

    private Integer calories;
    private Integer gramsOfProtein;
    private Integer gramsOfCarbohydrates;
    private Integer gramsOfFats;

    public NutritionGoalServiceModel() {
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Integer getGramsOfProtein() {
        return gramsOfProtein;
    }

    public void setGramsOfProtein(Integer gramsOfProtein) {
        this.gramsOfProtein = gramsOfProtein;
    }

    public Integer getGramsOfCarbohydrates() {
        return gramsOfCarbohydrates;
    }

    public void setGramsOfCarbohydrates(Integer gramsOfCarbohydrates) {
        this.gramsOfCarbohydrates = gramsOfCarbohydrates;
    }

    public Integer getGramsOfFats() {
        return gramsOfFats;
    }

    public void setGramsOfFats(Integer gramsOfFats) {
        this.gramsOfFats = gramsOfFats;
    }
}
