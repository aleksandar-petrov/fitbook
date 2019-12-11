package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.Meal;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, String> {

    @Query(value = "SELECT m FROM Meal m WHERE m.isPublic = true AND m.isCopied = false AND m.foods.size > 0 ORDER BY m.likes.size DESC, m.name ASC")
    List<Meal> findAllPublicNotCopiedNotEmpty();
}
