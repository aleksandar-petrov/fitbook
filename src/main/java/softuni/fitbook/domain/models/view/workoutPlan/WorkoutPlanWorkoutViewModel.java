package softuni.fitbook.domain.models.view.workoutPlan;

import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;
import softuni.fitbook.domain.models.view.workout.WorkoutViewModel;

public class WorkoutPlanWorkoutViewModel {

    private String id;
    private Integer orderIndex;
    private WorkoutViewModel workout;

    public WorkoutPlanWorkoutViewModel() {
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

    public WorkoutViewModel getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutViewModel workout) {
        this.workout = workout;
    }
}
