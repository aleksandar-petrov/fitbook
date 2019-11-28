package softuni.fitbook.domain.models.service.food;

public class FoodCreateServiceModel {

    private String name;
    private String description;
    private Integer proteinPerHundred;
    private Integer carbohydratesPerHundred;
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
