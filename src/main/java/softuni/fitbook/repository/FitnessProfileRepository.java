package softuni.fitbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.domain.entities.FitnessProfile;

public interface FitnessProfileRepository extends JpaRepository<FitnessProfile, String> {
}
