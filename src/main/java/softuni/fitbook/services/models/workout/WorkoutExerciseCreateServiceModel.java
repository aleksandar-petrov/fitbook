package softuni.fitbook.services.models.workout;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class WorkoutExerciseCreateServiceModel {

  @NotNull(message = ValidationConstants.REPS_REQUIRED)
  @Min(value = 1, message = ValidationConstants.REPS_POSITIVE_NUMBER)
  private Integer reps;

  @NotNull(message = ValidationConstants.SETS_REQUIRED)
  @Min(value = 1, message = ValidationConstants.SETS_POSITIVE_NUMBER)
  private Integer sets;

  @NotBlank(message = ValidationConstants.EXERCISE_ID_REQUIRED)
  private String exerciseId;

  public WorkoutExerciseCreateServiceModel() {
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
