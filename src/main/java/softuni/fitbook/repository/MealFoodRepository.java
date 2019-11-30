package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.MealFood;


@Repository
public interface MealFoodRepository extends JpaRepository<MealFood, String> {

}
