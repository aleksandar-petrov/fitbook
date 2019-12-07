package softuni.fitbook.web.controllers.models.response.exercise;

import java.util.Set;

public class AllExercisesResponseViewModel {

  private String id;
  private String name;
  private String instructions;
  private String pictureURL;
  private String youtubeURL;
  private String majorMuscleGroup;
  private Set<String> assistingMuscleGroups;
  private Long workoutsCounter;

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


  public String getInstructions() {
    return instructions;
  }

  public void setInstructions(String instructions) {
    this.instructions = instructions;
  }

  public String getPictureURL() {
    return pictureURL;
  }

  public void setPictureURL(String pictureURL) {
    this.pictureURL = pictureURL;
  }

  public String getYoutubeURL() {
    return youtubeURL;
  }

  public void setYoutubeURL(String youtubeURL) {
    this.youtubeURL = youtubeURL;
  }

  public String getMajorMuscleGroup() {
    return majorMuscleGroup;
  }

  public void setMajorMuscleGroup(String majorMuscleGroup) {
    this.majorMuscleGroup = majorMuscleGroup;
  }

  public Set<String> getAssistingMuscleGroups() {
    return assistingMuscleGroups;
  }

  public void setAssistingMuscleGroups(Set<String> assistingMuscleGroups) {
    this.assistingMuscleGroups = assistingMuscleGroups;
  }

  public Long getWorkoutsCounter() {
    return workoutsCounter;
  }

  public void setWorkoutsCounter(Long workoutsCounter) {
    this.workoutsCounter = workoutsCounter;
  }
}
