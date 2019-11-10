package softuni.fitbook.domain.models.service.exercise;

import java.util.Set;

public class ExerciseCreateServiceModel {

    private String name;
    private String instructions;
    private String youtubeURL;
    private String majorMuscleGroup;
    private Set<String> assistingMuscleGroups;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getYoutubeURL() {
        return youtubeURL;
    }

    public void setYoutubeURL(String youtubeURL) {
        this.youtubeURL = youtubeURL;
    }

    public String getMajorMuscleGroup() {
        return majorMuscleGroup;
    }

    public void setMajorMuscleGroup(String majorMuscleGroup) {
        this.majorMuscleGroup = majorMuscleGroup;
    }

    public Set<String> getAssistingMuscleGroups() {
        return assistingMuscleGroups;
    }

    public void setAssistingMuscleGroups(Set<String> assistingMuscleGroups) {
        this.assistingMuscleGroups = assistingMuscleGroups;
    }
}
