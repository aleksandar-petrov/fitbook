package softuni.fitbook.domain.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "meals")
public class Meal extends BaseEntity {

    private String name;
    private Boolean isPublic;
    private List<MealFood> foods;
    private UserProfile userProfile;
    private Boolean isCopied;
    private Integer totalProtein;
    private Integer totalCarbohydrates;
    private Integer totalFats;
    private Integer totalCalories;

    public Meal() {
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "is_public")
    public Boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(Boolean aPublic) {
        isPublic = aPublic;
    }

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "meal_id", referencedColumnName = "id")
    public List<MealFood> getFoods() {
        return foods;
    }

    public void setFoods(List<MealFood> foods) {
        this.foods = foods;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_profile_id", referencedColumnName = "id")
    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    @Column(name = "is_copied")
    public Boolean getIsCopied() {
        return isCopied;
    }

    public void setIsCopied(Boolean isCopied) {
        this.isCopied = isCopied;
    }

    @Column(name = "total_protein")
    public Integer getTotalProtein() {
        return totalProtein;
    }

    public void setTotalProtein(Integer totalProtein) {
        this.totalProtein = totalProtein;
    }

    @Column(name = "total_carbohydrates")
    public Integer getTotalCarbohydrates() {
        return totalCarbohydrates;
    }

    public void setTotalCarbohydrates(Integer totalCarbohydrates) {
        this.totalCarbohydrates = totalCarbohydrates;
    }

    @Column(name = "total_fats")
    public Integer getTotalFats() {
        return totalFats;
    }

    public void setTotalFats(Integer totalFats) {
        this.totalFats = totalFats;
    }

    @Column(name = "total_calories")
    public Integer getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(Integer totalCalories) {
        this.totalCalories = totalCalories;
    }
}
