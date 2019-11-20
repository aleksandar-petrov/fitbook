package softuni.fitbook.domain.models.service.workout;

import softuni.fitbook.domain.models.service.exercise.ExerciseServiceModel;

public class WorkoutExerciseServiceModel {

  private String id;
  private Integer orderIndex;
  private Integer reps;
  private Integer sets;
  private ExerciseServiceModel exercise;

  public WorkoutExerciseServiceModel() {
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

  public ExerciseServiceModel getExercise() {
    return exercise;
  }

  public void setExercise(ExerciseServiceModel exercise) {
    this.exercise = exercise;
  }
}
