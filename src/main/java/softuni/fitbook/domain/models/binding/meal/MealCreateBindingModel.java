package softuni.fitbook.domain.models.binding.meal;

public class MealCreateBindingModel {

  private String name;
  private Boolean isPublic;

  public MealCreateBindingModel() {
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
