package softuni.fitbook.domain.models.view.food;

public class FoodViewModel {

    private String id;
    private String name;
    private String description;
    private String pictureURL;
    private Integer proteinPerHundred;
    private Integer carbohydratesPerHundred;
    private Integer fatsPerHundred;
    private Integer caloriesPerHundred;

    public FoodViewModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getPictureURL() {
        return pictureURL;
    }

    public void setPictureURL(String pictureURL) {
        this.pictureURL = pictureURL;
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

    public Integer getCaloriesPerHundred() {
        return caloriesPerHundred;
    }

    public void setCaloriesPerHundred(Integer caloriesPerHundred) {
        this.caloriesPerHundred = caloriesPerHundred;
    }
}
