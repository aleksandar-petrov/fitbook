package softuni.fitbook.domain.models.service.workout;

import softuni.fitbook.domain.models.service.CreatorServiceModel;

import java.util.List;

public class WorkoutServiceModel {

  private String id;
  private String name;
  private Boolean isPublic;
  private List<WorkoutExerciseServiceModel> exercises;
  private CreatorServiceModel creator;
  private Boolean isCopied;

  public WorkoutServiceModel() {
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

  public List<WorkoutExerciseServiceModel> getExercises() {
    return exercises;
  }

  public void setExercises(List<WorkoutExerciseServiceModel> exercises) {
    this.exercises = exercises;
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
