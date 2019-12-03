package softuni.fitbook.domain.models.view.dietPlan;

import softuni.fitbook.domain.models.service.meal.MealServiceModel;
import softuni.fitbook.domain.models.view.meal.MealViewModel;

public class DietPlanMealViewModel {

    private String id;
    private Integer orderIndex;
    private MealViewModel meal;

    public DietPlanMealViewModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    public MealViewModel getMeal() {
        return meal;
    }

    public void setMeal(MealViewModel meal) {
        this.meal = meal;
    }
}
