package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "workout_plans")
public class WorkoutPlan extends BaseEntity {

    private String name;
    private Boolean isPublic;
    private List<WorkoutPlanWorkout> workouts;
    private UserProfile userProfile;
    private Boolean isCopied;
    private List<WorkoutPlanLike> likes;
    private List<WorkoutPlanComment> comments;

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

    @OneToMany(mappedBy = "workoutPlan")
    public List<WorkoutPlanWorkout> getWorkouts() {
        return workouts;
    }

    public void setWorkouts(List<WorkoutPlanWorkout> workouts) {
        this.workouts = workouts;
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

    @OneToMany(mappedBy = "workoutPlan")
    public List<WorkoutPlanLike> getLikes() {
        return likes;
    }

    public void setLikes(List<WorkoutPlanLike> likes) {
        this.likes = likes;
    }

    @OneToMany(mappedBy = "workoutPlan")
    public List<WorkoutPlanComment> getComments() {
        return comments;
    }

    public void setComments(List<WorkoutPlanComment> comments) {
        this.comments = comments;
    }

}
