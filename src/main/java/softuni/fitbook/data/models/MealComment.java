package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Comment;

import javax.persistence.*;

@Entity
@Table(name = "meal_comments")
public class MealComment extends Comment {

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