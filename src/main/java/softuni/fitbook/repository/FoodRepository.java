package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.domain.entities.Food;

public interface FoodRepository extends JpaRepository<Food, String> {
}
