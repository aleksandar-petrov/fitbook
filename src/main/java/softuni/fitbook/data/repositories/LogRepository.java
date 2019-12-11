package softuni.fitbook.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import softuni.fitbook.data.models.Log;

public interface LogRepository extends JpaRepository<Log, String> {
}
