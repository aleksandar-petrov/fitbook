package softuni.fitbook.domain.models.binding.workoutPlan;

import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.models.binding.workout.WorkoutEditBindingModel;

public class WorkoutPlanWorkoutEditBindingModel {

    private String id;
    private Integer orderIndex;
    private WorkoutEditBindingModel workout;

    public WorkoutPlanWorkoutEditBindingModel() {
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

    public WorkoutEditBindingModel getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutEditBindingModel workout) {
        this.workout = workout;
    }
}
