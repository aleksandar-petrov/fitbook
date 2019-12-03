package softuni.fitbook.domain.models.binding.dietPlan;


import softuni.fitbook.domain.models.binding.workoutPlan.WorkoutPlanWorkoutEditBindingModel;

import java.util.List;

public class DietPlanEditBindingModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<DietPlanMealEditBindingModel> meals;

    public DietPlanEditBindingModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(Boolean aPublic) {
        isPublic = aPublic;
    }

    public List<DietPlanMealEditBindingModel> getMeals() {
        return meals;
    }

    public void setMeals(List<DietPlanMealEditBindingModel> meals) {
        this.meals = meals;
    }
}
