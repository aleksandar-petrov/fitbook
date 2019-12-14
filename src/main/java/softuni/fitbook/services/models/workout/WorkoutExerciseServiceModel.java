package softuni.fitbook.services.models.workout;

import softuni.fitbook.common.constants.ValidationConstants;
import softuni.fitbook.services.models.exercise.ExerciseServiceModel;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class WorkoutExerciseServiceModel {

  @NotBlank(message = ValidationConstants.ID_REQUIRED)
  private String id;

  @NotNull(message = ValidationConstants.ORDER_INDEX_REQUIRED)
  private Integer orderIndex;

  @NotNull(message = ValidationConstants.REPS_REQUIRED)
  @Positive(message = ValidationConstants.REPS_POSITIVE_NUMBER)
  private Integer reps;

  @NotNull(message = ValidationConstants.SETS_REQUIRED)
  @Positive(message = ValidationConstants.SETS_POSITIVE_NUMBER)
  private Integer sets;

  @NotNull(message = ValidationConstants.EXERCISE_REQUIRED)
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
