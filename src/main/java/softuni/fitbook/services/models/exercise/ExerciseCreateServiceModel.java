package softuni.fitbook.services.models.exercise;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Set;

public class ExerciseCreateServiceModel {

    @NotBlank
    private String name;

    @NotBlank
    private String instructions;

    @NotBlank
    @Pattern(regexp = "http(?:s?)://(?:www\\.)?youtu(?:be\\.com/watch\\?v=|\\.be/)([\\w\\-_]*)(&(amp;)?[\\w?\u200C\u200B=]*)?")
    private String youtubeURL;

    @NotBlank
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
