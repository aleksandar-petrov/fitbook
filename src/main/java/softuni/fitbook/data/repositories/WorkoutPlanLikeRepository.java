package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.data.models.WorkoutLike;
import softuni.fitbook.data.models.WorkoutPlanLike;

public interface WorkoutPlanLikeRepository extends JpaRepository<WorkoutPlanLike, String> {
}
