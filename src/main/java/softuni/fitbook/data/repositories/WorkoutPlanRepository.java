package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.WorkoutPlan;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutPlanRepository extends JpaRepository<WorkoutPlan, String> {

    @Query(value = "SELECT w FROM WorkoutPlan w WHERE w.isPublic = true AND w.isCopied = false AND w.workouts.size > 0 ORDER BY w.likes.size DESC, w.name ASC")
    List<WorkoutPlan> findAllPublicNotCopiedNotEmpty();

}
