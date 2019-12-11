package softuni.fitbook.seeders;


import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import softuni.fitbook.config.Constants;
import softuni.fitbook.data.models.UserRole;
import softuni.fitbook.data.repositories.ExerciseRepository;
import softuni.fitbook.data.repositories.RoleRepository;

import java.util.Arrays;
import java.util.List;

@Component
public class DatabaseSeeder {

    private final RoleRepository roleRepository;

    @Autowired
    public DatabaseSeeder(RoleRepository roleRepository, ExerciseRepository exerciseRepository, Cloudinary cloudinary) {
        this.roleRepository = roleRepository;
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        seedRolesTable();
    }


    private void seedRolesTable() {
        List<UserRole> allRoles = this.roleRepository.findAll();

        if (allRoles.size() == 0) {
            UserRole rootAdmin = new UserRole();
            rootAdmin.setAuthority(Constants.AUTHORITY_ROOT_ADMIN);
            UserRole admin = new UserRole();
            admin.setAuthority(Constants.AUTHORITY_ADMIN);
            UserRole moderator = new UserRole();
            moderator.setAuthority(Constants.AUTHORITY_MODERATOR);
            UserRole user = new UserRole();
            user.setAuthority(Constants.AUTHORITY_USER);

            this.roleRepository.saveAll(Arrays.asList(rootAdmin, admin, moderator, user));
        }
    }




}