package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Comment;

import javax.persistence.*;

@Entity
@Table(name = "workout_comments")
public class WorkoutComment extends Comment {

    private Workout workout;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_id", referencedColumnName = "id")
    public Workout getWorkout() {
        return workout;
    }

    public void setWorkout(Workout workout) {
        this.workout = workout;
    }

}
