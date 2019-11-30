package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.FitnessProfile;

@Repository
public interface FitnessProfileRepository extends JpaRepository<FitnessProfile, String> {
}
