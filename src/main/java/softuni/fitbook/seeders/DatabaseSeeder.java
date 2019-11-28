package softuni.fitbook.seeders;


import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.dropbox.core.DbxException;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.FileMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import softuni.fitbook.config.Constants;
import softuni.fitbook.domain.entities.Exercise;
import softuni.fitbook.domain.entities.Muscle;
import softuni.fitbook.domain.entities.UserRole;
import softuni.fitbook.repository.ExerciseRepository;
import softuni.fitbook.repository.RoleRepository;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@Component
public class DatabaseSeeder {

    private final RoleRepository roleRepository;
    private final ExerciseRepository exerciseRepository;

    @Autowired
    public DatabaseSeeder(RoleRepository roleRepository, ExerciseRepository exerciseRepository, Cloudinary cloudinary) {
        this.roleRepository = roleRepository;
        this.exerciseRepository = exerciseRepository;
    }

    @EventListener
    public void seed(ContextRefreshedEvent event) {




        seedRolesTable();

    }


    private void seedExercises() {

        Exercise exercise = new Exercise();
        exercise.setName("Bench press");
        exercise.setInstructions("Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.");

        exercise.setMajorMuscleGroup(Muscle.CHEST);

        LinkedHashSet<Muscle> assistingMuscleGroups = new LinkedHashSet<>();
        assistingMuscleGroups.add(Muscle.TRICEPS);
        assistingMuscleGroups.add(Muscle.ANTERIOR_DELTOID);
        assistingMuscleGroups.add(Muscle.CHEST);
        assistingMuscleGroups.add(Muscle.ERECTORS);
        assistingMuscleGroups.add(Muscle.TRAPS);
        assistingMuscleGroups.add(Muscle.LATERAL_DELTOID);
        assistingMuscleGroups.add(Muscle.LATISIMUS);
        assistingMuscleGroups.add(Muscle.HAMSTRINGS);
        assistingMuscleGroups.add(Muscle.QUADRICEPS);
        assistingMuscleGroups.add(Muscle.CALVES);
        exercise.setAssistingMuscleGroups(assistingMuscleGroups);
        exercise.setPictureURL("https://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/m/360_1.jpg");
        exercise.setYoutubeURL("https://www.youtube.com/watch?v=vthMCtgVtFw");

        this.exerciseRepository.saveAndFlush(exercise);

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

            this.roleRepository.saveAll(Arrays.asList(admin, moderator, user));
        }
    }




}