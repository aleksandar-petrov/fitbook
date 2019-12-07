package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.BaseEntity;
import softuni.fitbook.data.models.enumerations.Muscle;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "exercises")
public class Exercise extends BaseEntity {

    private String name;
    private String instructions;
    private String pictureURL;
    private String youtubeURL;
    private Muscle majorMuscleGroup;
    private Set<Muscle> assistingMuscleGroups;

    public Exercise() {
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "instructions", length = 10000)
    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    @Column(name = "picture_url")
    public String getPictureURL() {
        return pictureURL;
    }

    public void setPictureURL(String pictureURL) {
        this.pictureURL = pictureURL;
    }

    @Column(name = "youtube_url")
    public String getYoutubeURL() {
        return youtubeURL;
    }

    public void setYoutubeURL(String youtubeURL) {
        this.youtubeURL = youtubeURL;
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "major_muscle_group")
    public Muscle getMajorMuscleGroup() {
        return majorMuscleGroup;
    }

    public void setMajorMuscleGroup(Muscle majorMuscleGroup) {
        this.majorMuscleGroup = majorMuscleGroup;
    }

    @ElementCollection(targetClass = Muscle.class)
    @CollectionTable(name = "exercises_assisting_muscles",
            joinColumns = @JoinColumn(name = "exercise_id"))
    @Column(name = "assisting_muscle")
    @Enumerated(EnumType.STRING)
    public Set<Muscle> getAssistingMuscleGroups() {
        return assistingMuscleGroups;
    }

    public void setAssistingMuscleGroups(Set<Muscle> assistingMuscleGroups) {
        this.assistingMuscleGroups = assistingMuscleGroups;
    }
}
