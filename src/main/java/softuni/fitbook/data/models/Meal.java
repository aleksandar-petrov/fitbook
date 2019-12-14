package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

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
    private List<MealLike> likes;
    private List<MealComment> comments;

    public Meal() {
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "is_public", nullable = false)
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

    @Column(name = "is_copied", nullable = false)
    public Boolean getIsCopied() {
        return isCopied;
    }

    public void setIsCopied(Boolean isCopied) {
        this.isCopied = isCopied;
    }

    @Column(name = "total_protein", nullable = false)
    public Integer getTotalProtein() {
        return totalProtein;
    }

    public void setTotalProtein(Integer totalProtein) {
        this.totalProtein = totalProtein;
    }

    @Column(name = "total_carbohydrates", nullable = false)
    public Integer getTotalCarbohydrates() {
        return totalCarbohydrates;
    }

    public void setTotalCarbohydrates(Integer totalCarbohydrates) {
        this.totalCarbohydrates = totalCarbohydrates;
    }

    @Column(name = "total_fats", nullable = false)
    public Integer getTotalFats() {
        return totalFats;
    }

    public void setTotalFats(Integer totalFats) {
        this.totalFats = totalFats;
    }

    @Column(name = "total_calories", nullable = false)
    public Integer getTotalCalories() {
        return totalCalories;
    }

    public void setTotalCalories(Integer totalCalories) {
        this.totalCalories = totalCalories;
    }

    @OneToMany(mappedBy = "meal")
    public List<MealLike> getLikes() {
        return likes;
    }

    public void setLikes(List<MealLike> likes) {
        this.likes = likes;
    }

    @OneToMany(mappedBy = "meal")
    public List<MealComment> getComments() {
        return comments;
    }

    public void setComments(List<MealComment> comments) {
        this.comments = comments;
    }
}
