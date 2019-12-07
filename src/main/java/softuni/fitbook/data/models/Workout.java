package softuni.fitbook.data.models;


import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "workouts")
public class Workout extends BaseEntity {

  private String name;
  private Boolean isPublic;
  private List<WorkoutExercise> exercises;
  private UserProfile userProfile;
  private Boolean isCopied;
  private List<WorkoutLike> likes;
  private List<WorkoutComment> comments;

  public Workout() {
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

  public void setIsPublic(Boolean isPublic) {
    this.isPublic = isPublic;
  }

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "workout_id", referencedColumnName = "id")
  public List<WorkoutExercise> getExercises() {
    return exercises;
  }

  public void setExercises(List<WorkoutExercise> exercises) {
    this.exercises = exercises;
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

  @OneToMany(mappedBy = "workout")
  public List<WorkoutLike> getLikes() {
    return likes;
  }

  public void setLikes(List<WorkoutLike> likes) {
    this.likes = likes;
  }

  @OneToMany(mappedBy = "workout")
  public List<WorkoutComment> getComments() {
    return comments;
  }

  public void setComments(List<WorkoutComment> comments) {
    this.comments = comments;
  }
}
