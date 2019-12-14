package softuni.fitbook.seeders;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import softuni.fitbook.common.constants.AuthorityConstants;
import softuni.fitbook.data.models.UserRole;
import softuni.fitbook.data.repositories.RoleRepository;
import softuni.fitbook.services.EmailService;

import java.util.Arrays;
import java.util.List;

@Component
public class DatabaseSeeder {

    private final RoleRepository roleRepository;
    private final EmailService emailService;

    @Autowired
    public DatabaseSeeder(RoleRepository roleRepository, EmailService emailService) {
        this.roleRepository = roleRepository;
        this.emailService = emailService;
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {


        seedRolesTable();
    }


    private void seedRolesTable() {
        List<UserRole> allRoles = this.roleRepository.findAll();

        if (allRoles.size() == 0) {
            UserRole rootAdmin = new UserRole();
            rootAdmin.setAuthority(AuthorityConstants.AUTHORITY_ROOT_ADMIN);
            UserRole admin = new UserRole();
            admin.setAuthority(AuthorityConstants.AUTHORITY_ADMIN);
            UserRole moderator = new UserRole();
            moderator.setAuthority(AuthorityConstants.AUTHORITY_MODERATOR);
            UserRole user = new UserRole();
            user.setAuthority(AuthorityConstants.AUTHORITY_USER);

            this.roleRepository.saveAll(Arrays.asList(rootAdmin, admin, moderator, user));
        }
    }




}