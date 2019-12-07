package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.FitnessProfile;

@Repository
public interface FitnessProfileRepository extends JpaRepository<FitnessProfile, String> {
}
