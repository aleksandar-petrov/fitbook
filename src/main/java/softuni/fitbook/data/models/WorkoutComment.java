package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Comment;

import javax.persistence.*;

@Entity
@Table(name = "workout_comments")
public class WorkoutComment extends Comment {

    private Workout workout;
    private String comment;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_id", referencedColumnName = "id")
    public Workout getWorkout() {
        return workout;
    }

    public void setWorkout(Workout workout) {
        this.workout = workout;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
