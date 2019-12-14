package softuni.fitbook.services.models.food;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class FoodCreateServiceModel {

    @NotBlank(message = ValidationConstants.NAME_REQUIRED)
    private String name;

    @NotBlank(message = ValidationConstants.DESCRIPTION_REQUIRED)
    private String description;

    @NotNull(message = ValidationConstants.PROTEIN_PER_100_REQUIRED)
    @Min(value = 0, message = ValidationConstants.PROTEIN_PER_100_NON_NEGATIVE_NUMBER)
    private Integer proteinPerHundred;

    @NotNull(message = ValidationConstants.CARBOHYDRATES_PER_100_REQUIRED)
    @Min(value = 0, message = ValidationConstants.CARBOHYDRATES_PER_100_NON_NEGATIVE_NUMBER)
    private Integer carbohydratesPerHundred;

    @NotNull(message = ValidationConstants.FATS_PER_100_REQUIRED)
    @Min(value = 0, message = ValidationConstants.FATS_PER_100_NON_NEGATIVE_NUMBER)
    private Integer fatsPerHundred;

    public FoodCreateServiceModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getProteinPerHundred() {
        return proteinPerHundred;
    }

    public void setProteinPerHundred(Integer proteinPerHundred) {
        this.proteinPerHundred = proteinPerHundred;
    }

    public Integer getCarbohydratesPerHundred() {
        return carbohydratesPerHundred;
    }

    public void setCarbohydratesPerHundred(Integer carbohydratesPerHundred) {
        this.carbohydratesPerHundred = carbohydratesPerHundred;
    }

    public Integer getFatsPerHundred() {
        return fatsPerHundred;
    }

    public void setFatsPerHundred(Integer fatsPerHundred) {
        this.fatsPerHundred = fatsPerHundred;
    }
}
