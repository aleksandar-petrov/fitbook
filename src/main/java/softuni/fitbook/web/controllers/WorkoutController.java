package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.domain.entities.Workout;
import softuni.fitbook.domain.models.binding.workout.WorkoutCreateBindingModel;
import softuni.fitbook.domain.models.binding.workout.WorkoutEditBindingModel;
import softuni.fitbook.domain.models.binding.workout.WorkoutExerciseBindingModel;
import softuni.fitbook.domain.models.service.workout.WorkoutCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutExerciseCreateServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutServiceModel;
import softuni.fitbook.domain.models.view.workout.WorkoutViewModel;
import softuni.fitbook.service.WorkoutService;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/workouts")
public class WorkoutController {

    private final WorkoutService workoutService;
    private final ModelMapper modelMapper;

    @Autowired
    public WorkoutController(WorkoutService workoutService, ModelMapper modelMapper) {
        this.workoutService = workoutService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public WorkoutViewModel createWorkout(@RequestBody WorkoutCreateBindingModel model, Principal principal) {

        return modelMapper.map(this.workoutService.createWorkout(modelMapper.map(model, WorkoutCreateServiceModel.class), principal.getName()), WorkoutViewModel.class);

    }

    @GetMapping("/my")
    public List<WorkoutViewModel> getLoggedInUserWorkouts(Principal principal) {

        return this.workoutService.getAllWorkoutsByUsername(principal.getName())
                .stream()
                .map(s -> modelMapper.map(s, WorkoutViewModel.class))
                .collect(Collectors.toList());

    }

    @PostMapping("/add-exercise/{workoutId}")
    public WorkoutViewModel addWorkoutExerciseToWorkout(@RequestBody WorkoutExerciseBindingModel model, @PathVariable(value = "workoutId") String workoutId) {

        return modelMapper.map(this.workoutService.addWorkoutExerciseToWorkout(
                this.modelMapper.map(model, WorkoutExerciseCreateServiceModel.class)
                , workoutId), WorkoutViewModel.class);
    }

    @DeleteMapping("/delete-exercise/{workoutId}")
    public ResponseEntity deleteWorkoutExerciseFromWorkout(@PathVariable String workoutId, @RequestParam(value = "exerciseId") String exerciseId) {

        WorkoutViewModel model = modelMapper.map(this.workoutService.deleteWorkoutExerciseFromWorkout(workoutId, exerciseId), WorkoutViewModel.class);

        return ResponseEntity.ok(model);
    }

    @DeleteMapping("/delete/{workoutId}")
    public boolean deleteWorkoutExerciseFromWorkout(@PathVariable String workoutId) {

        workoutService.deleteWorkoutById(workoutId);

        return true;
    }

    @PutMapping("/edit/{workoutId}")
    public WorkoutViewModel editWorkout(@PathVariable String workoutId, @RequestBody WorkoutEditBindingModel model) {

        return modelMapper.map(workoutService.editWorkoutById(workoutId, modelMapper.map(model, WorkoutServiceModel.class)), WorkoutViewModel.class);

    }

    @GetMapping("/public/all")
    public List<WorkoutViewModel> getAllPublicWorkouts() {

        return workoutService.getAllPublicWorkouts()
                .stream()
                .map(w -> modelMapper.map(w, WorkoutViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public WorkoutViewModel getWorkoutById(@PathVariable(value = "id") String id) {

        return modelMapper.map(workoutService.getWorkoutById(id), WorkoutViewModel.class);
    }

    @PostMapping("/copy/{workoutId}")
    public WorkoutViewModel createWorkout(@PathVariable(value = "workoutId") String workoutId, Principal principal) {

        return modelMapper.map(workoutService.copyWorkoutToLoggedUserWorkouts(workoutId, principal.getName()), WorkoutViewModel.class);
    }

}
