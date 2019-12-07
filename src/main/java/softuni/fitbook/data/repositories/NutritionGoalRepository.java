package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.NutritionGoal;

@Repository
public interface NutritionGoalRepository extends JpaRepository<NutritionGoal, String> {
}
