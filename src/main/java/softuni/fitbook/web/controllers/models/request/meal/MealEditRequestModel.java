package softuni.fitbook.web.controllers.models.request.meal;

import java.util.List;

public class MealEditRequestModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<MealFoodEditRequestModel> foods;

    public MealEditRequestModel() {
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

    public List<MealFoodEditRequestModel> getFoods() {
        return foods;
    }

    public void setFoods(List<MealFoodEditRequestModel> foods) {
        this.foods = foods;
    }
}
