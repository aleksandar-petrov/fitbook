package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "workout_exercises")
public class WorkoutExercise extends BaseEntity {

    private Integer orderIndex;
    private Integer reps;
    private Integer sets;
    private Exercise exercise;

  public WorkoutExercise() {
  }

  @Column(name = "order_index")
  public Integer getOrderIndex() {
    return orderIndex;
  }

  public void setOrderIndex(Integer orderIndex) {
    this.orderIndex = orderIndex;
  }

  @Column(name = "reps")
  public Integer getReps() {
    return reps;
  }

  public void setReps(Integer reps) {
    this.reps = reps;
  }

  @Column(name = "sets")
  public Integer getSets() {
    return sets;
  }

  public void setSets(Integer sets) {
    this.sets = sets;
  }

  @ManyToOne
  @JoinColumn(name = "exercise_id", referencedColumnName = "id")
  public Exercise getExercise() {
    return exercise;
  }

  public void setExercise(Exercise exercise) {
    this.exercise = exercise;
  }
}
