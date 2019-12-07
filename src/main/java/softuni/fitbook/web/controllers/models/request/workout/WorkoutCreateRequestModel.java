package softuni.fitbook.web.controllers.models.request.workout;

public class WorkoutCreateRequestModel {

  private String name;
  private Boolean isPublic;

  public WorkoutCreateRequestModel() {
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
