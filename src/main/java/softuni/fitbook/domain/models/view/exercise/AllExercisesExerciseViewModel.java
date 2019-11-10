package softuni.fitbook.domain.models.view.exercise;

import java.util.Set;

public class AllExercisesExerciseViewModel {

    private String name;
    private String description;
    private String pictureURL;
    private String youtubeURL;
    private String majorMuscleGroup;
    private Set<String> assistingMuscleGroups;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPictureURL() {
        return pictureURL;
    }

    public void setPictureURL(String pictureURL) {
        this.pictureURL = pictureURL;
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
