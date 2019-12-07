package softuni.fitbook.web.controllers.models.request.workoutPlan;

import softuni.fitbook.web.controllers.models.request.workout.WorkoutEditRequestModel;

public class WorkoutPlanWorkoutEditRequestModel {

    private String id;
    private Integer orderIndex;
    private WorkoutEditRequestModel workout;

    public WorkoutPlanWorkoutEditRequestModel() {
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

    public WorkoutEditRequestModel getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutEditRequestModel workout) {
        this.workout = workout;
    }
}
