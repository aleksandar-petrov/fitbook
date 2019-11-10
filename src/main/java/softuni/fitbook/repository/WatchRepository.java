package softuni.fitbook.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.fitbook.domain.entities.Watch;

import java.util.List;

@Repository
public interface WatchRepository extends JpaRepository<Watch, String> {
    List<Watch> findTop4ByOrderByViewsDesc();
}
