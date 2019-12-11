package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.WorkoutPlanComment;

@Repository
public interface WorkoutPlanCommentRepository extends JpaRepository<WorkoutPlanComment, String> {
}
