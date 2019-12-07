package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.web.controllers.models.request.workout.WorkoutCreateRequestModel;
import softuni.fitbook.web.controllers.models.request.workoutPlan.WorkoutPlanEditRequestModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.web.controllers.models.response.workoutPlan.WorkoutPlanResponseModel;
import softuni.fitbook.services.WorkoutPlanService;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "api/workout-plans/")
public class WorkoutPlanController {

    private final WorkoutPlanService workoutPlanService;
    private final ModelMapper modelMapper;

    public WorkoutPlanController(WorkoutPlanService workoutPlanService, ModelMapper modelMapper) {
        this.workoutPlanService = workoutPlanService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public WorkoutPlanResponseModel createWorkoutPlan(@RequestBody WorkoutCreateRequestModel model, Principal principal) {

        WorkoutPlanServiceModel workoutPlan =
                workoutPlanService.createWorkoutPlan(
                        modelMapper.map(model, WorkoutPlanCreateServiceModel.class),
                        principal.getName());

        return modelMapper.map(workoutPlan, WorkoutPlanResponseModel.class);
    }

    @GetMapping("/my")
    public List<WorkoutPlanResponseModel> getLoggedInUserWorkoutPlans(Principal principal) {

        return workoutPlanService.getAllWorkoutPlansByUsername(principal.getName())
                .stream()
                .map(wp -> modelMapper.map(wp, WorkoutPlanResponseModel.class))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{workoutPlanId}")
    public boolean deleteMyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, Principal principal) {

        workoutPlanService.deleteMyWorkoutPlanById(workoutPlanId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{workoutPlanId}")
    public WorkoutPlanResponseModel editMyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, @RequestBody WorkoutPlanEditRequestModel model, Principal principal) {

        return modelMapper.map(workoutPlanService.editMyWorkoutPlanById(workoutPlanId, modelMapper.map(model, WorkoutPlanServiceModel.class), principal.getName()), WorkoutPlanResponseModel.class);

    }

    @GetMapping("/public/all")
    public List<WorkoutPlanResponseModel> getAllPublicWorkoutPlans() {

        return workoutPlanService
                .getAllPublicWorkoutPlans()
                .stream()
                .map(w -> modelMapper.map(w, WorkoutPlanResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public WorkoutPlanResponseModel getWorkoutPlanById(@PathVariable(value = "id") String id) {

        return modelMapper.map(
                workoutPlanService.getWorkoutPlanById(id),
                WorkoutPlanResponseModel.class);

    }

    @PostMapping("/copy/{workoutPlanId}")
    public WorkoutPlanResponseModel copyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, Principal principal) {

        return modelMapper.map(workoutPlanService.copyWorkoutPlanToLoggedUserWorkoutPlans(workoutPlanId, principal.getName()), WorkoutPlanResponseModel.class);

    }

    @PostMapping("/add-workout/{workoutPlanId}")
    public WorkoutPlanResponseModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, @RequestParam(value = "workoutId") String workoutId, Principal principal) {

        return modelMapper.map(workoutPlanService.addWorkoutFromMyWorkoutsToMyWorkoutPlan(workoutPlanId, workoutId, principal.getName()), WorkoutPlanResponseModel.class);
    }

    @GetMapping(value = "/export/excel/{workoutPlanId}", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public byte[] exportWorkoutPlanToExcel(@PathVariable(value = "workoutPlanId") String workoutPlanId) {

        return workoutPlanService.exportWorkoutPlanToExcel(workoutPlanId);
    }


}
