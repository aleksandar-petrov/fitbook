package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "diet_plans")
public class DietPlan extends BaseEntity {

    private String name;
    private Boolean isPublic;
    private List<DietPlanMeal> meals;
    private UserProfile userProfile;
    private Boolean isCopied;
    private Integer totalProtein;
    private Integer totalCarbohydrates;
    private Integer totalFats;
    private Integer totalCalories;
    private List<DietPlanLike> likes;
    private List<DietPlanComment> comments;

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

    public void setIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
    }

    @OneToMany(mappedBy = "dietPlan")
    public List<DietPlanMeal> getMeals() {
        return meals;
    }

    public void setMeals(List<DietPlanMeal> meals) {
        this.meals = meals;
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

    public void setIsCopied(Boolean copied) {
        isCopied = copied;
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

    @OneToMany(mappedBy = "dietPlan")
    public List<DietPlanLike> getLikes() {
        return likes;
    }

    public void setLikes(List<DietPlanLike> likes) {
        this.likes = likes;
    }

    @OneToMany(mappedBy = "dietPlan")
    public List<DietPlanComment> getComments() {
        return comments;
    }

    public void setComments(List<DietPlanComment> comments) {
        this.comments = comments;
    }
}
