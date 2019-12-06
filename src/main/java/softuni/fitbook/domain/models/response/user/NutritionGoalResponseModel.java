package softuni.fitbook.domain.models.response.user;

public class NutritionGoalResponseModel {

    private Integer calories;
    private Integer gramsOfProtein;
    private Integer gramsOfCarbohydrates;
    private Integer gramsOfFats;

    public NutritionGoalResponseModel() {
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
