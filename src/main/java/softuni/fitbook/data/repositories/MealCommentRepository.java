package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.MealComment;
import softuni.fitbook.data.models.WorkoutComment;

@Repository
public interface MealCommentRepository extends JpaRepository<MealComment, String> {
}
