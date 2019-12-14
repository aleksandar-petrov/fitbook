package softuni.fitbook.services.models.exercise;

import softuni.fitbook.common.constants.ValidationConstants;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Set;

public class ExerciseCreateServiceModel {

    @NotBlank(message = ValidationConstants.NAME_REQUIRED)
    private String name;

    @NotBlank(message = ValidationConstants.INSTRUCTIONS_REQUIRED)
    private String instructions;

    @NotBlank(message = ValidationConstants.YOUTUBE_LINK_REQUIRED)
    @Pattern(regexp = ValidationConstants.YOUTUBE_LINK_PATTERN, message = ValidationConstants.YOUTUBE_LINK_VALID)
    private String youtubeURL;

    @NotBlank(message = ValidationConstants.MAJOR_MUSCLE_GROUP_REQUIRED)
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
