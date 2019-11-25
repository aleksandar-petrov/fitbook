package softuni.fitbook.domain.models.binding.workoutPlan;

import softuni.fitbook.domain.entities.UserProfile;
import softuni.fitbook.domain.entities.WorkoutPlanWorkout;

import java.util.List;

public class WorkoutPlanEditBindingModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<WorkoutPlanWorkoutEditBindingModel> workouts;

    public WorkoutPlanEditBindingModel() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getIsPublic() {
        return isPublic;
    }

    public void setIsPublic(Boolean aPublic) {
        isPublic = aPublic;
    }

    public List<WorkoutPlanWorkoutEditBindingModel> getWorkouts() {
        return workouts;
    }

    public void setWorkouts(List<WorkoutPlanWorkoutEditBindingModel> workouts) {
        this.workouts = workouts;
    }
}
