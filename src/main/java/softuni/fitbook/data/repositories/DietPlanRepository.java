package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import softuni.fitbook.data.models.DietPlan;

import java.util.List;

public interface DietPlanRepository extends JpaRepository<DietPlan, String> {

    @Query(value = "SELECT d FROM DietPlan d WHERE d.isPublic = true AND d.isCopied = false AND d.meals.size > 0 ORDER BY d.likes.size DESC, d.name ASC")
    List<DietPlan> findAllPublicNotCopiedNotEmpty();

}
