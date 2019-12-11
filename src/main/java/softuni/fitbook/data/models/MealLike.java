package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Like;

import javax.persistence.*;

@Entity
@Table(name = "meal_likes")
public class MealLike extends Like {

    private Meal meal;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "meal_id", referencedColumnName = "id")
    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }
}
