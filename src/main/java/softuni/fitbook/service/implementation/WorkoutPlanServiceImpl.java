package softuni.fitbook.service.implementation;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import softuni.fitbook.domain.entities.User;
import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.entities.WorkoutPlan;
import softuni.fitbook.domain.entities.WorkoutPlanWorkout;
import softuni.fitbook.domain.models.service.CreatorServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanWorkoutServiceModel;
import softuni.fitbook.repository.*;
import softuni.fitbook.service.WorkoutPlanService;
import softuni.fitbook.service.WorkoutService;
import softuni.fitbook.web.errors.exceptions.NotFoundException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkoutPlanServiceImpl implements WorkoutPlanService {

    private final WorkoutPlanRepository workoutPlanRepository;
    private final WorkoutRepository workoutRepository;
    private final UserProfileRepository userProfileRepository;
    private final WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository;
    private final WorkoutService workoutService;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public WorkoutPlanServiceImpl(WorkoutPlanRepository workoutPlanRepository, WorkoutRepository workoutRepository, UserProfileRepository userProfileRepository, WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository, WorkoutService workoutService, UserRepository userRepository, ModelMapper modelMapper) {
        this.workoutPlanRepository = workoutPlanRepository;
        this.workoutRepository = workoutRepository;
        this.userProfileRepository = userProfileRepository;
        this.workoutPlanWorkoutRepository = workoutPlanWorkoutRepository;
        this.workoutService = workoutService;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public WorkoutPlanServiceModel createWorkout(WorkoutPlanCreateServiceModel model, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        WorkoutPlan workoutPlan = modelMapper.map(model, WorkoutPlan.class);

        workoutPlan.setIsCopied(false);

        workoutPlan.setUserProfile(user.getUserProfile());

        workoutPlan = workoutPlanRepository.save(workoutPlan);

        return modelMapper.map(workoutPlan, WorkoutPlanServiceModel.class);
    }

    @Override
    public WorkoutPlanServiceModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(String workoutPlanId, String workoutId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));


        Workout workout = user.getUserProfile()
                .getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such workout with given ID."));

        WorkoutPlan workoutPlan = user.getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        WorkoutPlanWorkout workoutPlanWorkout = new WorkoutPlanWorkout();
        workoutPlanWorkout.setOrderIndex(workoutPlan.getWorkouts().size() + 1);
        workoutPlanWorkout.setWorkout(workout);
        workoutPlanWorkout.setWorkoutPlan(workoutPlan);

        workoutPlanWorkoutRepository.save(workoutPlanWorkout);

        workoutPlan.getWorkouts().add(workoutPlanWorkout);

        workoutPlan = workoutPlanRepository.save(workoutPlan);

        return mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan);
    }

    @Override
    public List<WorkoutPlanServiceModel> getAllWorkoutPlansByUsername(String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        return user.getUserProfile().getWorkoutPlans()
                .stream()
                .map(this::mapWorkoutPlanToWorkoutPlanServiceModel)
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutPlanServiceModel deleteWorkoutFromMyWorkoutPlan(String workoutPlanId, String workoutId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        WorkoutPlan workoutPlan = user.getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        WorkoutPlanWorkout workout = workoutPlan.getWorkouts()
                .stream()
                .filter(w -> w.getId().equals(workoutId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such workout with given ID."));

        workoutPlan.getWorkouts().remove(workout);

        workoutPlan = workoutPlanRepository.save(workoutPlan);

        return mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan);

    }

    @Override
    @Transactional
    public void deleteMyWorkoutPlanById(String workoutPlanId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        WorkoutPlan workoutPlan = user.getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        workoutPlan.getWorkouts().forEach(w -> {
            w.setWorkout(null);
            workoutPlanWorkoutRepository.delete(w);
        });


        user.getUserProfile().getWorkoutPlans().remove(workoutPlan);

        userProfileRepository.save(user.getUserProfile());

        workoutPlanRepository.delete(workoutPlan);
    }

    @Override
    public WorkoutPlanServiceModel editMyWorkoutPlanById(String workoutPlanId, WorkoutPlanServiceModel model, String username) {

        WorkoutPlan oldWorkoutPlan = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getWorkoutPlans()
                .stream()
                .filter(wp -> wp.getId().equals(workoutPlanId))
                .findFirst()
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        WorkoutPlan editedWorkoutPlan = modelMapper.map(model, WorkoutPlan.class);

        oldWorkoutPlan.setName(editedWorkoutPlan.getName());

        if (!oldWorkoutPlan.getIsCopied()) {
            oldWorkoutPlan.setIsPublic(editedWorkoutPlan.getIsPublic());
        }

        List<WorkoutPlanWorkout> oldWorkouts = oldWorkoutPlan.getWorkouts();

        List<WorkoutPlanWorkout> newWorkouts = editedWorkoutPlan.getWorkouts();

        List<WorkoutPlanWorkout> workoutsToRemove = new ArrayList<>();

        for (WorkoutPlanWorkout oldWorkout : oldWorkouts) {

            WorkoutPlanWorkout workoutPlanWorkout = newWorkouts
                    .stream()
                    .filter(w -> w.getId().equals(oldWorkout.getId()))
                    .findFirst().orElse(null);

            if (workoutPlanWorkout == null) {
                workoutsToRemove.add(oldWorkout);
            } else {
                oldWorkout.setOrderIndex(workoutPlanWorkout.getOrderIndex());
            }
        }

        oldWorkouts.removeAll(workoutsToRemove);

        workoutsToRemove.forEach(w -> {
            w.setWorkout(null);
            workoutPlanWorkoutRepository.delete(w);
        });

        oldWorkoutPlan = workoutPlanRepository.save(oldWorkoutPlan);

        return mapWorkoutPlanToWorkoutPlanServiceModel(oldWorkoutPlan);
    }

    @Override
    public List<WorkoutPlanServiceModel> getAllPublicWorkoutPlans() {
        return workoutPlanRepository
                .findAllPublicNotCopiedNotEmpty()
                .stream()
                .map(this::mapWorkoutPlanToWorkoutPlanServiceModel)
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutPlanServiceModel copyWorkoutToLoggedUserWorkoutPlans(String workoutPlanId, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        WorkoutPlan workoutPlan = workoutPlanRepository.findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        WorkoutPlan copy = new WorkoutPlan();

        copy.setName(workoutPlan.getName() + " - Copy");
        copy.setIsPublic(false);
        copy.setIsCopied(true);
        copy.setWorkouts(new ArrayList<>());

        copy.setUserProfile(user.getUserProfile());

        workoutPlanRepository.save(copy);

        workoutPlan.getWorkouts()
                .forEach(w -> {
                    WorkoutPlanWorkout copyWorkoutPlanWorkout =
                            new WorkoutPlanWorkout();

                    Workout workoutCopy = workoutService.getWorkoutCopy(w.getWorkout());

                    workoutRepository.save(workoutCopy);

                    copyWorkoutPlanWorkout.setOrderIndex(w.getOrderIndex());
                    copyWorkoutPlanWorkout.setWorkout(workoutCopy);
                    copyWorkoutPlanWorkout.getWorkout().setUserProfile(user.getUserProfile());
                    copyWorkoutPlanWorkout.setWorkoutPlan(copy);
                    workoutPlanWorkoutRepository.save(copyWorkoutPlanWorkout);
                    copy.getWorkouts().add(copyWorkoutPlanWorkout);
                });


        System.out.println();

        workoutPlanRepository.save(copy);

        return mapWorkoutPlanToWorkoutPlanServiceModel(copy);

    }


    @Override
    public WorkoutPlanServiceModel getWorkoutPlanById(String id) {
        return mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlanRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID.")));
    }


    private WorkoutPlanServiceModel mapWorkoutPlanToWorkoutPlanServiceModel(WorkoutPlan workoutPlan) {

        WorkoutPlanServiceModel model = modelMapper.map(workoutPlan, WorkoutPlanServiceModel.class);

        User user = userRepository.findByUserProfileId(workoutPlan.getUserProfile().getId())
                .orElseThrow(() -> new IllegalArgumentException("No user with given user profile ID."));

        CreatorServiceModel creator = modelMapper.map(user, CreatorServiceModel.class);

        model.setCreator(creator);


        model.setWorkouts(workoutPlan.getWorkouts()
                .stream()
                .sorted(Comparator.comparing(WorkoutPlanWorkout::getOrderIndex))
                .map(this::mapWorkoutPlanWorkoutToServiceModel)
                .collect(Collectors.toList()));

        return model;
    }

    private WorkoutPlanWorkoutServiceModel mapWorkoutPlanWorkoutToServiceModel(WorkoutPlanWorkout workout) {

        WorkoutPlanWorkoutServiceModel model = modelMapper.map(workout, WorkoutPlanWorkoutServiceModel.class);

        model.setWorkout(workoutService.mapWorkoutToWorkoutServiceModel(workout.getWorkout()));

        return model;

    }
}
