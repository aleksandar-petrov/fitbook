package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.data.models.DietPlanLike;
import softuni.fitbook.data.models.WorkoutLike;

public interface DietPlanLikeRepository extends JpaRepository<DietPlanLike, String> {
}
