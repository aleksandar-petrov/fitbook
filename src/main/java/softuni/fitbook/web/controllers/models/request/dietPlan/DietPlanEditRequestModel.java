package softuni.fitbook.web.controllers.models.request.dietPlan;


import java.util.List;

public class DietPlanEditRequestModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<DietPlanMealEditRequestModel> meals;

    public DietPlanEditRequestModel() {
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

    public List<DietPlanMealEditRequestModel> getMeals() {
        return meals;
    }

    public void setMeals(List<DietPlanMealEditRequestModel> meals) {
        this.meals = meals;
    }
}
