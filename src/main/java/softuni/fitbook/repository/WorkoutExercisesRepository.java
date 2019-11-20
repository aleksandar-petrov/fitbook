package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.WorkoutExercise;

@Repository
public interface WorkoutExercisesRepository extends JpaRepository<WorkoutExercise, String> {
}
