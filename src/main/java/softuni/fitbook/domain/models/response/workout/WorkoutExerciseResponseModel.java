package softuni.fitbook.domain.models.response.workout;

import softuni.fitbook.domain.models.response.exercise.AllExercisesResponseViewModel;

public class WorkoutExerciseResponseModel {

  private String id;
  private Integer orderIndex;
  private Integer reps;
  private Integer sets;
  private AllExercisesResponseViewModel exercise;

  public WorkoutExerciseResponseModel() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Integer getOrderIndex() {
    return orderIndex;
  }

  public void setOrderIndex(Integer orderIndex) {
    this.orderIndex = orderIndex;
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

  public AllExercisesResponseViewModel getExercise() {
    return exercise;
  }

  public void setExercise(AllExercisesResponseViewModel exercise) {
    this.exercise = exercise;
  }
}
