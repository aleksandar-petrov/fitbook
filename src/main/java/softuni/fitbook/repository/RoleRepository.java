package softuni.fitbook.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.UserRole;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<UserRole, String> {

    List<UserRole> findAll();

    UserRole getByAuthority(String authority);
}
