package softuni.fitbook.data.models;

import softuni.fitbook.data.models.base.Comment;

import javax.persistence.*;

@Entity
@Table(name = "workout_plan_comments")
public class WorkoutPlanComment extends Comment {

    private WorkoutPlan workoutPlan;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_plan_id", referencedColumnName = "id")
    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }

}
