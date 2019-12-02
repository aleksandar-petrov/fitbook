package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.domain.models.binding.workout.WorkoutCreateBindingModel;
import softuni.fitbook.domain.models.binding.workoutPlan.WorkoutPlanEditBindingModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanCreateServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.domain.models.view.workoutPlan.WorkoutPlanViewModel;
import softuni.fitbook.service.WorkoutPlanService;

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
    public WorkoutPlanViewModel createWorkoutPlan(@RequestBody WorkoutCreateBindingModel model, Principal principal) {

        WorkoutPlanServiceModel workoutPlan =
                workoutPlanService.createWorkoutPlan(
                        modelMapper.map(model, WorkoutPlanCreateServiceModel.class),
                        principal.getName());

        return modelMapper.map(workoutPlan, WorkoutPlanViewModel.class);
    }

    @GetMapping("/my")
    public List<WorkoutPlanViewModel> getLoggedInUserWorkoutPlans(Principal principal) {

        return workoutPlanService.getAllWorkoutPlansByUsername(principal.getName())
                .stream()
                .map(wp -> modelMapper.map(wp, WorkoutPlanViewModel.class))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{workoutPlanId}")
    public boolean deleteMyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, Principal principal) {

        workoutPlanService.deleteMyWorkoutPlanById(workoutPlanId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{workoutPlanId}")
    public WorkoutPlanViewModel editMyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, @RequestBody WorkoutPlanEditBindingModel model, Principal principal) {

        return modelMapper.map(workoutPlanService.editMyWorkoutPlanById(workoutPlanId, modelMapper.map(model, WorkoutPlanServiceModel.class), principal.getName()), WorkoutPlanViewModel.class);

    }

    @GetMapping("/public/all")
    public List<WorkoutPlanViewModel> getAllPublicWorkoutPlans() {

        return workoutPlanService
                .getAllPublicWorkoutPlans()
                .stream()
                .map(w -> modelMapper.map(w, WorkoutPlanViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public WorkoutPlanViewModel getWorkoutPlanById(@PathVariable(value = "id") String id) {

        return modelMapper.map(
                workoutPlanService.getWorkoutPlanById(id),
                WorkoutPlanViewModel.class);

    }

    @PostMapping("/copy/{workoutPlanId}")
    public WorkoutPlanViewModel copyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, Principal principal) {

        return modelMapper.map(workoutPlanService.copyWorkoutPlanToLoggedUserWorkoutPlans(workoutPlanId, principal.getName()), WorkoutPlanViewModel.class);

    }

    @PostMapping("/add-workout/{workoutPlanId}")
    public WorkoutPlanViewModel addWorkoutFromMyWorkoutsToMyWorkoutPlan(@PathVariable(value = "workoutPlanId") String workoutPlanId, @RequestParam(value = "workoutId") String workoutId, Principal principal) {

        return modelMapper.map(workoutPlanService.addWorkoutFromMyWorkoutsToMyWorkoutPlan(workoutPlanId, workoutId, principal.getName()), WorkoutPlanViewModel.class);
    }

    @GetMapping(value = "/export/excel/{workoutPlanId}", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public byte[] exportWorkoutPlanToExcel(@PathVariable(value = "workoutPlanId") String workoutPlanId) {

        return workoutPlanService.exportWorkoutPlanToExcel(workoutPlanId);
    }


}
