package softuni.fitbook.web.controllers.models.response.workoutPlan;

import softuni.fitbook.services.models.CreatorServiceModel;
import softuni.fitbook.web.controllers.models.response.CommentResponseModel;

import java.util.List;

public class WorkoutPlanResponseModel {

  private String id;
  private String name;
  private Boolean isPublic;
  private List<WorkoutPlanWorkoutResponseModel> workouts;
  private CreatorServiceModel creator;
  private Boolean isCopied;
  private Long likesCount;
  private Boolean isLiked;
  private List<CommentResponseModel> comments;

  public WorkoutPlanResponseModel() {
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

  public List<WorkoutPlanWorkoutResponseModel> getWorkouts() {
    return workouts;
  }

  public void setWorkouts(List<WorkoutPlanWorkoutResponseModel> workouts) {
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

  public List<CommentResponseModel> getComments() {
    return comments;
  }

  public void setComments(List<CommentResponseModel> comments) {
    this.comments = comments;
  }
}
