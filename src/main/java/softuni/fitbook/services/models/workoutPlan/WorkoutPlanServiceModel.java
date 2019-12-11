package softuni.fitbook.services.models.workoutPlan;

import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.CreatorServiceModel;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class WorkoutPlanServiceModel {


  private String id;

  @NotBlank
  private String name;

  @NotNull
  private Boolean isPublic;

  private List<WorkoutPlanWorkoutServiceModel> workouts;
  private CreatorServiceModel creator;
  private Boolean isCopied;
  private Long likesCount;
  private Boolean isLiked;
  private List<CommentServiceModel> comments;

  public WorkoutPlanServiceModel() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Boolean getIsPublic() {
    return isPublic;
  }

  public void setIsPublic(Boolean isPublic) {
    this.isPublic = isPublic;
  }

  public List<WorkoutPlanWorkoutServiceModel> getWorkouts() {
    return workouts;
  }

  public void setWorkouts(List<WorkoutPlanWorkoutServiceModel> workouts) {
    this.workouts = workouts;
  }

  public CreatorServiceModel getCreator() {
    return creator;
  }

  public void setCreator(CreatorServiceModel creator) {
    this.creator = creator;
  }

  public Boolean getIsCopied() {
    return isCopied;
  }

  public void setIsCopied(Boolean copied) {
    isCopied = copied;
  }

  public Long getLikesCount() {
    return likesCount;
  }

  public void setLikesCount(Long likesCount) {
    this.likesCount = likesCount;
  }

  public Boolean getIsLiked() {
    return isLiked;
  }

  public void setIsLiked(Boolean liked) {
    isLiked = liked;
  }

  public List<CommentServiceModel> getComments() {
    return comments;
  }

  public void setComments(List<CommentServiceModel> comments) {
    this.comments = comments;
  }
}
