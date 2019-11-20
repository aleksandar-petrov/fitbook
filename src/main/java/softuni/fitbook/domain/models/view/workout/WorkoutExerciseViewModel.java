package softuni.fitbook.domain.models.view.workout;

import softuni.fitbook.domain.models.service.exercise.ExerciseServiceModel;
import softuni.fitbook.domain.models.view.exercise.AllExercisesExerciseViewModel;

public class WorkoutExerciseViewModel {

  private String id;
  private Integer orderIndex;
  private Integer reps;
  private Integer sets;
  private AllExercisesExerciseViewModel exercise;

  public WorkoutExerciseViewModel() {
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

  public AllExercisesExerciseViewModel getExercise() {
    return exercise;
  }

  public void setExercise(AllExercisesExerciseViewModel exercise) {
    this.exercise = exercise;
  }
}
