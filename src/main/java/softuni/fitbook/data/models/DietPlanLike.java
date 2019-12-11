package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Like;

import javax.persistence.*;

@Entity
@Table(name = "diet_plan_likes")
public class DietPlanLike extends Like {

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
