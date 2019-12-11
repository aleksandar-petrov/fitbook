package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Comment;

import javax.persistence.*;

@Entity
@Table(name = "diet_plan_comments")
public class DietPlanComment extends Comment {

    private DietPlan dietPlan;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "diet_plan_id", referencedColumnName = "id")
    public DietPlan getDietPlan() {
        return dietPlan;
    }

    public void setDietPlan(DietPlan dietPlan) {
        this.dietPlan = dietPlan;
    }

}
