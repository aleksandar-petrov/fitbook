package softuni.fitbook.domain.models.binding.workout;

import softuni.fitbook.domain.models.service.workout.WorkoutExerciseServiceModel;

import java.util.List;

public class WorkoutEditBindingModel {

    private String id;
    private String name;
    private Boolean isPublic;
    private List<WorkoutExerciseEditBindingModel> exercises;

    public WorkoutEditBindingModel() {
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

    public List<WorkoutExerciseEditBindingModel> getExercises() {
        return exercises;
    }

    public void setExercises(List<WorkoutExerciseEditBindingModel> exercises) {
        this.exercises = exercises;
    }
}
