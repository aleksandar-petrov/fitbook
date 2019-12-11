package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.data.models.MealLike;

public interface MealLikeRepository extends JpaRepository<MealLike, String> {
}
