package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.Workout;

import java.util.List;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, String> {

    @Query(value = "SELECT w FROM Workout w WHERE w.isPublic = true AND w.isCopied = false AND w.exercises.size > 0")
    List<Workout> findAllPublicNotCopiedNotEmpty();

}
