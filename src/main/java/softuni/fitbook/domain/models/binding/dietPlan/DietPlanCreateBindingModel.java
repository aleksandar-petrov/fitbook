package softuni.fitbook.domain.models.binding.dietPlan;

public class DietPlanCreateBindingModel {

    private String name;
    private Boolean isPublic;

    public DietPlanCreateBindingModel() {
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
