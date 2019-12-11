package softuni.fitbook.services.models.meal;

import javax.validation.constraints.NotBlank;

public class MealCreateServiceModel {

    @NotBlank
    private String name;

    @NotBlank
    private Boolean isPublic;

    public MealCreateServiceModel() {
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
