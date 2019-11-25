package softuni.fitbook.domain.models.service.workoutPlan;

import softuni.fitbook.domain.models.service.CreatorServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;

import java.util.List;

public class WorkoutPlanServiceModel {

  private String id;
  private String name;
  private Boolean isPublic;
  private List<WorkoutPlanWorkoutServiceModel> workouts;
  private CreatorServiceModel creator;
  private Boolean isCopied;

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
}
