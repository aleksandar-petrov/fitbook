package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.WorkoutPlanWorkout;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutPlanWorkoutRepository extends JpaRepository<WorkoutPlanWorkout, String> {

    List<WorkoutPlanWorkout> findAllByWorkoutId(String workoutId);

}
