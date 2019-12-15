package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.Food;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, String> {


    List<Food> findAllByOrderByName();
}
