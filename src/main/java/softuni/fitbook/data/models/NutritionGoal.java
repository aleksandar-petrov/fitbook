package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "nutrition_goals")
public class NutritionGoal extends BaseEntity {

    private Integer calories;
    private Integer gramsOfProtein;
    private Integer gramsOfCarbohydrates;
    private Integer gramsOfFats;

    @Column(name = "calories", nullable = false)
    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    @Column(name = "protein_grams", nullable = false)
    public Integer getGramsOfProtein() {
        return gramsOfProtein;
    }

    public void setGramsOfProtein(Integer gramsOfProtein) {
        this.gramsOfProtein = gramsOfProtein;
    }

    @Column(name = "carbohydrates_grams", nullable = false)
    public Integer getGramsOfCarbohydrates() {
        return gramsOfCarbohydrates;
    }

    public void setGramsOfCarbohydrates(Integer gramsOfCarbohydrates) {
        this.gramsOfCarbohydrates = gramsOfCarbohydrates;
    }

    @Column(name = "fats_grams", nullable = false)
    public Integer getGramsOfFats() {
        return gramsOfFats;
    }

    public void setGramsOfFats(Integer gramsOfFats) {
        this.gramsOfFats = gramsOfFats;
    }



}
