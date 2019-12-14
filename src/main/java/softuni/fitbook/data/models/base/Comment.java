package softuni.fitbook.data.models.base;

import softuni.fitbook.data.models.UserProfile;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@MappedSuperclass
public abstract class Comment extends BaseEntity {

    private String comment;
    private UserProfile userProfile;
    private LocalDateTime postedOn;

    @Column(name = "comment", nullable = false, length = 10000)
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_profile_id", referencedColumnName = "id")
    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    @Column(name = "posted_on", nullable = false)
    public LocalDateTime getPostedOn() {
        return postedOn;
    }

    public void setPostedOn(LocalDateTime postedOn) {
        this.postedOn = postedOn;
    }
}
