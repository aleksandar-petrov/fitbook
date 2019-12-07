package softuni.fitbook.web.controllers.models.request.workout;

public class WorkoutExerciseRequestModel {

  private Integer reps;
  private Integer sets;
  private String exerciseId;

  public WorkoutExerciseRequestModel() {
  }

  public Integer getReps() {
    return reps;
  }

  public void setReps(Integer reps) {
    this.reps = reps;
  }

  public Integer getSets() {
    return sets;
  }

  public void setSets(Integer sets) {
    this.sets = sets;
  }

  public String getExerciseId() {
    return exerciseId;
  }

  public void setExerciseId(String exerciseId) {
    this.exerciseId = exerciseId;
  }
}
