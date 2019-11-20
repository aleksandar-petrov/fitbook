package softuni.fitbook.domain.models.view.workout;

import softuni.fitbook.domain.models.view.CreatorViewModel;

import java.util.List;

public class WorkoutViewModel {
  private String id;
  private String name;
  private Boolean isPublic;
  private List<WorkoutExerciseViewModel> exercises;
  private CreatorViewModel creator;
  private Boolean isCopied;

  public WorkoutViewModel() {
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

  public List<WorkoutExerciseViewModel> getExercises() {
    return exercises;
  }

  public void setExercises(List<WorkoutExerciseViewModel> exercises) {
    this.exercises = exercises;
  }

  public CreatorViewModel getCreator() {
    return creator;
  }

  public void setCreator(CreatorViewModel creator) {
    this.creator = creator;
  }

  public Boolean getIsCopied() {
    return isCopied;
  }

  public void setIsCopied(Boolean copied) {
    isCopied = copied;
  }
}
