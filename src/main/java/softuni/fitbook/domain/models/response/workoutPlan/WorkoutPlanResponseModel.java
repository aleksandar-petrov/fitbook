package softuni.fitbook.domain.models.response.workoutPlan;

import softuni.fitbook.domain.models.service.CreatorServiceModel;

import java.util.List;

public class WorkoutPlanResponseModel {

  private String id;
  private String name;
  private Boolean isPublic;
  private List<WorkoutPlanWorkoutResponseModel> workouts;
  private CreatorServiceModel creator;
  private Boolean isCopied;

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
}
