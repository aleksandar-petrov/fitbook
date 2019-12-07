package softuni.fitbook.web.controllers.models.response.workout;

import softuni.fitbook.web.controllers.models.response.CreatorResponseModel;

import java.util.List;

public class WorkoutResponseModel {
  private String id;
  private String name;
  private Boolean isPublic;
  private List<WorkoutExerciseResponseModel> exercises;
  private CreatorResponseModel creator;
  private Boolean isCopied;
  private Long likesCount;
  private Boolean isLiked;

  public WorkoutResponseModel() {
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

  public List<WorkoutExerciseResponseModel> getExercises() {
    return exercises;
  }

  public void setExercises(List<WorkoutExerciseResponseModel> exercises) {
    this.exercises = exercises;
  }

  public CreatorResponseModel getCreator() {
    return creator;
  }

  public void setCreator(CreatorResponseModel creator) {
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
}
