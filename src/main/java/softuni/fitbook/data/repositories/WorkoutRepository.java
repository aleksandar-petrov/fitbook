package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.Workout;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, String> {

    @Query(value = "SELECT w FROM Workout w WHERE w.isPublic = true AND w.isCopied = false AND w.exercises.size > 0 ORDER BY w.likes.size DESC, w.name ASC")
    List<Workout> findAllPublicNotCopiedNotEmpty();

}
