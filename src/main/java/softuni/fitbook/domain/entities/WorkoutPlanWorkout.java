package softuni.fitbook.domain.entities;


import javax.persistence.*;

@Entity
@Table(name = "workout_plan_workouts")
public class WorkoutPlanWorkout extends BaseEntity{

    private Integer orderIndex;
    private Workout workout;
    private WorkoutPlan workoutPlan;

    @Column(name = "order_index")
    public Integer getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(Integer orderIndex) {
        this.orderIndex = orderIndex;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_id", referencedColumnName = "id")
    public Workout getWorkout() {
        return workout;
    }

    public void setWorkout(Workout workout) {
        this.workout = workout;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "workout_plan_id", referencedColumnName = "id")
    public WorkoutPlan getWorkoutPlan() {
        return workoutPlan;
    }

    public void setWorkoutPlan(WorkoutPlan workoutPlan) {
        this.workoutPlan = workoutPlan;
    }
}
