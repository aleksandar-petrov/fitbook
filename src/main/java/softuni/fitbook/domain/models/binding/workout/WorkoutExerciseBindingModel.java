package softuni.fitbook.domain.models.binding.workout;

public class WorkoutExerciseBindingModel {

  private Integer reps;
  private Integer sets;
  private String exerciseId;

  public WorkoutExerciseBindingModel() {
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
