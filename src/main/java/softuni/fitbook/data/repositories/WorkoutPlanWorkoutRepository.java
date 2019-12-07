package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.WorkoutPlanWorkout;

import java.util.List;

@Repository
public interface WorkoutPlanWorkoutRepository extends JpaRepository<WorkoutPlanWorkout, String> {

    List<WorkoutPlanWorkout> findAllByWorkoutId(String workoutId);

}
