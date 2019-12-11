package softuni.fitbook.services.models.food;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class FoodCreateServiceModel {

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotNull
    @Min(0)
    private Integer proteinPerHundred;

    @NotNull
    @Min(0)
    private Integer carbohydratesPerHundred;

    @NotNull
    @Min(0)
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
