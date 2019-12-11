package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.DietPlanComment;

@Repository
public interface DietPlanCommentRepository extends JpaRepository<DietPlanComment, String> {
}
