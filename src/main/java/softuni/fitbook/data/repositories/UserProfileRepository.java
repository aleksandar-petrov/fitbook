package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.data.models.UserProfile;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, String> {

}
