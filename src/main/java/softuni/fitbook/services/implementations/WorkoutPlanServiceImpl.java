package softuni.fitbook.services.implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import softuni.fitbook.data.models.User;
import softuni.fitbook.data.models.Workout;
import softuni.fitbook.data.models.WorkoutPlan;
import softuni.fitbook.data.models.WorkoutPlanWorkout;
import softuni.fitbook.services.models.CreatorServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanWorkoutServiceModel;
import softuni.fitbook.data.repositories.*;
import softuni.fitbook.services.FileExporterService;
import softuni.fitbook.services.WorkoutPlanService;
import softuni.fitbook.services.WorkoutService;
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
    private final FileExporterService fileExporterService;

    @Autowired
    public WorkoutPlanServiceImpl(WorkoutPlanRepository workoutPlanRepository, WorkoutRepository workoutRepository, UserProfileRepository userProfileRepository, WorkoutPlanWorkoutRepository workoutPlanWorkoutRepository, WorkoutService workoutService, UserRepository userRepository, ModelMapper modelMapper, FileExporterService fileExporterService) {
        this.workoutPlanRepository = workoutPlanRepository;
        this.workoutRepository = workoutRepository;
        this.userProfileRepository = userProfileRepository;
        this.workoutPlanWorkoutRepository = workoutPlanWorkoutRepository;
        this.workoutService = workoutService;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.fileExporterService = fileExporterService;
    }

    @Override
    public WorkoutPlanServiceModel createWorkoutPlan(WorkoutPlanCreateServiceModel model, String username) {

        User user = this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."));

        WorkoutPlan workoutPlan = modelMapper.map(model, WorkoutPlan.class);

        workoutPlan.setIsCopied(false);

        workoutPlan.setWorkouts(new ArrayList<>());

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

        return this.userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NotFoundException("No such user with given username."))
                .getUserProfile()
                .getWorkoutPlans()
                .stream()
                .map(this::mapWorkoutPlanToWorkoutPlanServiceModel)
                .sorted(Comparator.comparing(WorkoutPlanServiceModel::getName))
                .collect(Collectors.toList());
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
                .sorted(Comparator.comparing(WorkoutPlanServiceModel::getName))
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutPlanServiceModel copyWorkoutPlanToLoggedUserWorkoutPlans(String workoutPlanId, String username) {

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

    public byte[] exportWorkoutPlanToExcel(String workoutPlanId) {

        WorkoutPlan workoutPlan = workoutPlanRepository
                .findById(workoutPlanId)
                .orElseThrow(() -> new NotFoundException("No such workout plan with given ID."));

        return fileExporterService
                .exportWorkoutPlanToExcel(
                        mapWorkoutPlanToWorkoutPlanServiceModel(workoutPlan));

    }
}