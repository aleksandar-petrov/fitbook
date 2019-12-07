package softuni.fitbook.services.models.workoutPlan;

public class WorkoutPlanCreateServiceModel {

  private String name;
  private Boolean isPublic;

  public WorkoutPlanCreateServiceModel() {
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
