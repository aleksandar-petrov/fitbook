package softuni.fitbook.web.controllers.models.request.dietPlan;

public class DietPlanCreateRequestModel {

    private String name;
    private Boolean isPublic;

    public DietPlanCreateRequestModel() {
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

}
