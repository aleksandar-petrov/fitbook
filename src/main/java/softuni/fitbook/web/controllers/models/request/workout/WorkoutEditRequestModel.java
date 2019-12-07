package softuni.fitbook.web.controllers.models.request.workout;

import java.util.List;

public class WorkoutEditRequestModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<WorkoutExerciseEditRequestModel> exercises;

    public WorkoutEditRequestModel() {
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

    public List<WorkoutExerciseEditRequestModel> getExercises() {
        return exercises;
    }

    public void setExercises(List<WorkoutExerciseEditRequestModel> exercises) {
        this.exercises = exercises;
    }
}
