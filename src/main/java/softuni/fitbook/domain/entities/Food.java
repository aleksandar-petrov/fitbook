package softuni.fitbook.domain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "foods")
public class Food extends BaseEntity {

    private String name;
    private String description;
    private String pictureURL;
    private Integer proteinPerHundred;
    private Integer carbohydratesPerHundred;
    private Integer fatsPerHundred;
    private Integer caloriesPerHundred;


    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "picture_url")
    public String getPictureURL() {
        return pictureURL;
    }

    public void setPictureURL(String pictureURL) {
        this.pictureURL = pictureURL;
    }

    @Column(name = "protein_per_hundred")
    public Integer getProteinPerHundred() {
        return proteinPerHundred;
    }

    public void setProteinPerHundred(Integer proteinPerHundred) {
        this.proteinPerHundred = proteinPerHundred;
    }

    @Column(name = "carbohydrates_per_hundred")
    public Integer getCarbohydratesPerHundred() {
        return carbohydratesPerHundred;
    }

    public void setCarbohydratesPerHundred(Integer carbohydratesPerHundred) {
        this.carbohydratesPerHundred = carbohydratesPerHundred;
    }

    @Column(name = "fats_per_hundred")
    public Integer getFatsPerHundred() {
        return fatsPerHundred;
    }

    public void setFatsPerHundred(Integer fatsPerHundred) {
        this.fatsPerHundred = fatsPerHundred;
    }

    @Column(name = "calories_per_hundred")
    public Integer getCaloriesPerHundred() {
        return caloriesPerHundred;
    }

    public void setCaloriesPerHundred(Integer caloriesPerHundred) {
        this.caloriesPerHundred = caloriesPerHundred;
    }
}
