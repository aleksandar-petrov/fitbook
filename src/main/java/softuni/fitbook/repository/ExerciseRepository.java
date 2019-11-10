package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.domain.entities.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, String> {
}
