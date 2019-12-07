package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.WorkoutExercise;

@Repository
public interface WorkoutExercisesRepository extends JpaRepository<WorkoutExercise, String> {
}
