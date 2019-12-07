package softuni.fitbook.web.controllers.models.request.meal;

public class MealCreateRequestModel {

  private String name;
  private Boolean isPublic;

  public MealCreateRequestModel() {
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
