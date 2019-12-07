package softuni.fitbook.services.models.workoutPlan;

import softuni.fitbook.services.models.workout.WorkoutServiceModel;

public class WorkoutPlanWorkoutServiceModel {

    private String id;
    private Integer orderIndex;
    private WorkoutServiceModel workout;

    public WorkoutPlanWorkoutServiceModel() {
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

    public WorkoutServiceModel getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutServiceModel workout) {
        this.workout = workout;
    }
}
