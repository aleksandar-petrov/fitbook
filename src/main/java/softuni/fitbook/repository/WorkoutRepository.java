package softuni.fitbook.repository;

import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.Workout;

import java.util.List;
import java.util.Optional;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, String> {

    @Query(value = "SELECT w FROM Workout w WHERE w.isPublic = true AND w.isCopied = false AND w.exercises.size > 0")
    List<Workout> findAllPublicNotCopiedNotEmpty();

    @Query(value = "SELECT w FROM Workout w WHERE w.id = :id AND w.isPublic = true AND w.isCopied = false AND w.exercises.size > 0")
    Optional<Workout> findByIdPublicNotCopiedNotEmpty(@Param(value = "id") String id);

}
