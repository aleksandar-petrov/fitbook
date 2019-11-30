package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.entities.WorkoutPlan;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutPlanRepository extends JpaRepository<WorkoutPlan, String> {

    @Query(value = "SELECT w FROM WorkoutPlan w WHERE w.isPublic = true AND w.isCopied = false AND w.workouts.size > 0")
    List<WorkoutPlan> findAllPublicNotCopiedNotEmpty();

    @Query(value = "SELECT w FROM WorkoutPlan w WHERE w.id = :id AND w.isPublic = true AND w.isCopied = false AND w.workouts.size > 0")
    Optional<WorkoutPlan> findByIdPublicNotCopiedNotEmpty(@Param(value = "id") String id);
}
