package softuni.fitbook.domain.models.binding.meal;

import softuni.fitbook.domain.entities.MealFood;
import softuni.fitbook.domain.entities.UserProfile;

import java.util.List;

public class MealEditBindingModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<MealFoodEditBindingModel> foods;

    public MealEditBindingModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getPublic() {
        return isPublic;
    }

    public void setPublic(Boolean aPublic) {
        isPublic = aPublic;
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

    public List<MealFoodEditBindingModel> getFoods() {
        return foods;
    }

    public void setFoods(List<MealFoodEditBindingModel> foods) {
        this.foods = foods;
    }
}
