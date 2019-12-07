package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Like;

import javax.persistence.*;

@Entity
@Table(name = "workout_likes")
public class WorkoutLike extends Like {

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
