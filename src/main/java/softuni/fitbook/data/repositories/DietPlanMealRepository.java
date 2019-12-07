package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.DietPlanMeal;

import java.util.List;

@Repository
public interface DietPlanMealRepository extends JpaRepository<DietPlanMeal, String> {

    List<DietPlanMeal> findAllByMealId(String mealId);

}
