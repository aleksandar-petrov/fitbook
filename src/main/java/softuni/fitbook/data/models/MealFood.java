package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "meal_foods")
public class MealFood extends BaseEntity {

    private Integer serving;
    private Integer proteinPerServing;
    private Integer carbohydratesPerServing;
    private Integer fatsPerServing;
    private Integer caloriesPerServing;
    private Food food;

    public MealFood() {
    }

    @Column(name = "serving")
    public Integer getServing() {
        return serving;
    }

    public void setServing(Integer serving) {
        this.serving = serving;
    }

    @Column(name = "protein_per_serving")
    public Integer getProteinPerServing() {
        return proteinPerServing;
    }

    public void setProteinPerServing(Integer proteinPerServing) {
        this.proteinPerServing = proteinPerServing;
    }

    @Column(name = "carbohydrates_per_serving")
    public Integer getCarbohydratesPerServing() {
        return carbohydratesPerServing;
    }

    public void setCarbohydratesPerServing(Integer carbohydratesPerServing) {
        this.carbohydratesPerServing = carbohydratesPerServing;
    }

    @Column(name = "fats_per_serving")
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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "food_id", referencedColumnName = "id")
    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }
}
