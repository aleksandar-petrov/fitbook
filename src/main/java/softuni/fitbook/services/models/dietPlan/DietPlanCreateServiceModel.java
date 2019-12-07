package softuni.fitbook.services.models.dietPlan;

public class DietPlanCreateServiceModel {

    private String name;
    private Boolean isPublic;

    public DietPlanCreateServiceModel() {
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
