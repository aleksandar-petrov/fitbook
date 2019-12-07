package softuni.fitbook.web.controllers.models.request.workout;

import softuni.fitbook.web.controllers.models.request.exercise.ExerciseEditRequestModel;

public class WorkoutExerciseEditRequestModel {
    private String id;
    private Integer orderIndex;
    private Integer reps;
    private Integer sets;
    private ExerciseEditRequestModel exercise;

    public WorkoutExerciseEditRequestModel() {

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

    public ExerciseEditRequestModel getExercise() {
        return exercise;
    }

    public void setExercise(ExerciseEditRequestModel exercise) {
        this.exercise = exercise;
    }
}
