package softuni.fitbook.services.models.workout;

import softuni.fitbook.services.models.exercise.ExerciseServiceModel;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class WorkoutExerciseServiceModel {

  @NotBlank
  private String id;

  @NotNull
  private Integer orderIndex;

  @NotNull
  private Integer reps;

  @NotNull
  private Integer sets;

  @NotNull
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
