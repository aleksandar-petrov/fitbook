package softuni.fitbook.web.controllers.models.request.workoutPlan;

public class WorkoutPlanCreateRequestModel {

  private String name;
  private Boolean isPublic;

  public WorkoutPlanCreateRequestModel() {
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

}
