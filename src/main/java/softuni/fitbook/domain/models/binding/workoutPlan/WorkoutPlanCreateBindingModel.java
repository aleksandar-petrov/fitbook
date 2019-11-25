package softuni.fitbook.domain.models.binding.workoutPlan;

public class WorkoutPlanCreateBindingModel {

  private String name;
  private Boolean isPublic;

  public WorkoutPlanCreateBindingModel() {
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
