package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.Meal;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, String> {

    @Query(value = "SELECT m FROM Meal m WHERE m.isPublic = true AND m.isCopied = false AND m.foods.size > 0")
    List<Meal> findAllPublicNotCopiedNotEmpty();
}
