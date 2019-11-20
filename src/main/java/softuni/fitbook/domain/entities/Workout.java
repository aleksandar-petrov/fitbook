package softuni.fitbook.domain.entities;


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


}
