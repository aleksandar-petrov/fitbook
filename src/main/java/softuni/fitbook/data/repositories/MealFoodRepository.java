package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.MealFood;


@Repository
public interface MealFoodRepository extends JpaRepository<MealFood, String> {

}
