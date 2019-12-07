package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.data.models.WorkoutLike;

public interface WorkoutLikeRepository extends JpaRepository<WorkoutLike, String> {
}
