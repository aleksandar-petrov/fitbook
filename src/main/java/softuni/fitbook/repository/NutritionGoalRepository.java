package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.NutritionGoal;

@Repository
public interface NutritionGoalRepository extends JpaRepository<NutritionGoal, String> {
}
