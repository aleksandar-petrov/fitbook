package softuni.fitbook.domain.models.binding.workout;

import softuni.fitbook.domain.models.binding.exercise.ExerciseEditBindingModel;

public class WorkoutExerciseEditBindingModel {
    private String id;
    private Integer orderIndex;
    private Integer reps;
    private Integer sets;
    private ExerciseEditBindingModel exercise;

    public WorkoutExerciseEditBindingModel() {

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

    public ExerciseEditBindingModel getExercise() {
        return exercise;
    }

    public void setExercise(ExerciseEditBindingModel exercise) {
        this.exercise = exercise;
    }
}
