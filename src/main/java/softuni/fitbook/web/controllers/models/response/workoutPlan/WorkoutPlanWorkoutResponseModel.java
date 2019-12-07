package softuni.fitbook.web.controllers.models.response.workoutPlan;

import softuni.fitbook.web.controllers.models.response.workout.WorkoutResponseModel;

public class WorkoutPlanWorkoutResponseModel {

    private String id;
    private Integer orderIndex;
    private WorkoutResponseModel workout;

    public WorkoutPlanWorkoutResponseModel() {
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

    public WorkoutResponseModel getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutResponseModel workout) {
        this.workout = workout;
    }
}
