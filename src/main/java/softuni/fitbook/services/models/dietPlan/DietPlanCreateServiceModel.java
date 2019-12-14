package softuni.fitbook.services.models.dietPlan;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class DietPlanCreateServiceModel {

    @NotBlank(message = ValidationConstants.NAME_REQUIRED)
    private String name;

    @NotNull(message = ValidationConstants.STATUS_REQUIRED)
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
