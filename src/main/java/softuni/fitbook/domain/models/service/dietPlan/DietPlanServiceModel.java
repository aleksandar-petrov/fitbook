package softuni.fitbook.domain.models.service.dietPlan;

import softuni.fitbook.domain.entities.DietPlanMeal;
import softuni.fitbook.domain.entities.UserProfile;
import softuni.fitbook.domain.models.service.CreatorServiceModel;
import softuni.fitbook.domain.models.service.user.UserServiceModel;

import java.util.List;

public class DietPlanServiceModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<DietPlanMealServiceModel> meals;
    private CreatorServiceModel creator;
    private Boolean isCopied;
    private Integer totalProtein;
    private Integer totalCarbohydrates;
    private Integer totalFats;
    private Integer totalCalories;

    public DietPlanServiceModel() {
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

    public void setIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
    }

    public List<DietPlanMealServiceModel> getMeals() {
        return meals;
    }

    public void setMeals(List<DietPlanMealServiceModel> meals) {
        this.meals = meals;
    }

    public CreatorServiceModel getCreator() {
        return creator;
    }

    public void setCreator(CreatorServiceModel creator) {
        this.creator = creator;
    }

    public Boolean getIsCopied() {
        return isCopied;
    }

    public void setIsCopied(Boolean isCopied) {
        this.isCopied = isCopied;
    }

    public Integer getTotalProtein() {
        return totalProtein;
    }

    public void setTotalProtein(Integer totalProtein) {
        this.totalProtein = totalProtein;
    }

    public Integer getTotalCarbohydrates() {
        return totalCarbohydrates;
    }

    public void setTotalCarbohydrates(Integer totalCarbohydrates) {
        this.totalCarbohydrates = totalCarbohydrates;
    }

    public Integer getTotalFats() {
        return totalFats;
    }

    public void setTotalFats(Integer totalFats) {
        this.totalFats = totalFats;
    }

    public Integer getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(Integer totalCalories) {
        this.totalCalories = totalCalories;
    }
}
