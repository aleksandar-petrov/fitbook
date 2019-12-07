package softuni.fitbook.web.controllers.models.request.workoutPlan;

import java.util.List;

public class WorkoutPlanEditRequestModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<WorkoutPlanWorkoutEditRequestModel> workouts;

    public WorkoutPlanEditRequestModel() {
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

    public List<WorkoutPlanWorkoutEditRequestModel> getWorkouts() {
        return workouts;
    }

    public void setWorkouts(List<WorkoutPlanWorkoutEditRequestModel> workouts) {
        this.workouts = workouts;
    }
}
