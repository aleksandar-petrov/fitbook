package softuni.fitbook.domain.entities;

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

    public void setIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
    }

    @OneToMany(mappedBy = "dietPlan")
    public List<DietPlanMeal> getMeals() {
        return meals;
    }

    public void setWorkouts(List<DietPlanMeal> meals) {
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


    @Column(name = "is_copied")
    public Boolean getIsCopied() {
        return isCopied;
    }

    public void setIsCopied(Boolean copied) {
        isCopied = copied;
    }

}
