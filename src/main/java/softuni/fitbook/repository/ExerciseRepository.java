package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.Exercise;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, String> {
}
