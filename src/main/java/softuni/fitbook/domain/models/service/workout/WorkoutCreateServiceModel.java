package softuni.fitbook.domain.models.service.workout;

import java.util.List;

public class WorkoutCreateServiceModel {

  private String name;
  private Boolean isPublic;

  public WorkoutCreateServiceModel() {
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
