package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "diet_plan_meals")
public class DietPlanMeal extends BaseEntity {

    private Integer orderIndex;
    private Meal meal;
    private DietPlan dietPlan;

    @Column(name = "order_index", nullable = false)
    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "meal_id", referencedColumnName = "id")
    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "diet_plan_id", referencedColumnName = "id")
    public DietPlan getDietPlan() {
        return dietPlan;
    }

    public void setDietPlan(DietPlan dietPlan) {
        this.dietPlan = dietPlan;
    }
}
