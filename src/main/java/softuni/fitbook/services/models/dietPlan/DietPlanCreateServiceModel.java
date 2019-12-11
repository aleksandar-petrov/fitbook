package softuni.fitbook.services.models.dietPlan;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DietPlanCreateServiceModel {

    @NotBlank
    private String name;

    @NotNull
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
