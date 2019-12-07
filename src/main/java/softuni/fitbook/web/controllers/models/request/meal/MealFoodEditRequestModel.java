package softuni.fitbook.web.controllers.models.request.meal;

public class MealFoodEditRequestModel {

    private String id;
    private Integer serving;

    public MealFoodEditRequestModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getServing() {
        return serving;
    }

    public void setServing(Integer serving) {
        this.serving = serving;
    }
}
