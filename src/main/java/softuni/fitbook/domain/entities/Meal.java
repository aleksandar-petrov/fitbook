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

    @OneToMany(cascade = CascadeType.ALL)
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
    public Boolean getCopied() {
        return isCopied;
    }

    public void setCopied(Boolean copied) {
        isCopied = copied;
    }
}
