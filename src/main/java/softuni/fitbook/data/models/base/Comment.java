package softuni.fitbook.data.models.base;

import softuni.fitbook.data.models.UserProfile;

import javax.persistence.*;
import java.time.LocalDate;

@MappedSuperclass
public abstract class Comment extends BaseEntity {

    private UserProfile userProfile;
    private LocalDate date;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_profile_id", referencedColumnName = "id")
    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    @Column(name = "date")
    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
