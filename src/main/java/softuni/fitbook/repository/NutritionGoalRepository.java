package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.domain.entities.NutritionGoal;

public interface NutritionGoalRepository extends JpaRepository<NutritionGoal, String> {
}
