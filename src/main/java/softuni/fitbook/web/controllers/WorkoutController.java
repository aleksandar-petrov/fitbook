package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;
import softuni.fitbook.web.controllers.models.request.workout.WorkoutCreateRequestModel;
import softuni.fitbook.web.controllers.models.request.workout.WorkoutEditRequestModel;
import softuni.fitbook.web.controllers.models.request.workout.WorkoutExerciseRequestModel;
import softuni.fitbook.services.models.workout.WorkoutCreateServiceModel;
import softuni.fitbook.services.models.workout.WorkoutExerciseCreateServiceModel;
import softuni.fitbook.services.models.workout.WorkoutServiceModel;
import softuni.fitbook.web.controllers.models.response.CommentResponseModel;
import softuni.fitbook.web.controllers.models.response.workout.WorkoutResponseModel;
import softuni.fitbook.services.WorkoutService;

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
    public WorkoutResponseModel createWorkout(@RequestBody WorkoutCreateRequestModel model, Principal principal) {

        return modelMapper.map(this.workoutService.createWorkout(modelMapper.map(model, WorkoutCreateServiceModel.class), principal.getName()), WorkoutResponseModel.class);

    }

    @GetMapping("/my")
    public List<WorkoutResponseModel> getLoggedInUserWorkouts(Principal principal) {

        List<WorkoutResponseModel> collect = this.workoutService.getAllWorkoutsByUsername(principal.getName())
                .stream()
                .map(s -> modelMapper.map(s, WorkoutResponseModel.class))
                .collect(Collectors.toList());

        return collect;

    }

    @PostMapping("/add-exercise/{workoutId}")
    public WorkoutResponseModel addWorkoutExerciseToWorkout(@RequestBody WorkoutExerciseRequestModel model, @PathVariable(value = "workoutId") String workoutId, Principal principal) {

        return modelMapper.map(this.workoutService.addWorkoutExerciseToWorkout(
                this.modelMapper.map(model, WorkoutExerciseCreateServiceModel.class)
                , workoutId, principal.getName()), WorkoutResponseModel.class);
    }

    @DeleteMapping("/delete-exercise/{workoutId}")
    public ResponseEntity deleteWorkoutExerciseFromWorkout(@PathVariable String workoutId, @RequestParam(value = "exerciseId") String exerciseId, Principal principal) {

        WorkoutResponseModel model = modelMapper.map(this.workoutService.deleteWorkoutExerciseFromWorkout(workoutId, exerciseId, principal.getName()), WorkoutResponseModel.class);

        return ResponseEntity.ok(model);
    }

    @DeleteMapping("/delete/{workoutId}")
    public boolean deleteWorkoutExerciseFromWorkout(@PathVariable String workoutId, Principal principal) {

        workoutService.deleteWorkoutById(workoutId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{workoutId}")
    public WorkoutResponseModel editWorkout(@PathVariable String workoutId, @RequestBody WorkoutEditRequestModel model, Principal principal) {

        return modelMapper.map(workoutService.editWorkoutById(
                workoutId,
                modelMapper.map(model, WorkoutServiceModel.class),
                principal.getName()), WorkoutResponseModel.class);

    }

    @GetMapping("/public/all")
    public List<WorkoutResponseModel> getAllPublicWorkouts(Principal principal) {

        return workoutService.getAllPublicWorkouts(principal.getName())
                .stream()
                .map(w -> modelMapper.map(w, WorkoutResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public WorkoutResponseModel getWorkoutById(@PathVariable(value = "id") String id, Principal principal) {

        return modelMapper.map(workoutService.getWorkoutById(id, principal.getName()), WorkoutResponseModel.class);
    }

    @PostMapping("/copy/{workoutId}")
    public WorkoutResponseModel createWorkout(@PathVariable(value = "workoutId") String workoutId, Principal principal) {

        return modelMapper.map(workoutService.copyWorkoutToLoggedUserWorkouts(workoutId, principal.getName()), WorkoutResponseModel.class);
    }

    @PostMapping("/like/{workoutId}")
    public WorkoutResponseModel likeWorkout(@PathVariable String workoutId, Principal principal) {

        return modelMapper.map(workoutService.likeWorkout(workoutId, principal.getName()), WorkoutResponseModel.class);

    }

    @PostMapping("/comment/{workoutId}")
    public CommentResponseModel commentWorkout(@PathVariable String workoutId, @RequestBody CommentRequestModel model, Principal principal) {

        return modelMapper.map(workoutService.commentWorkout(workoutId, modelMapper.map(model, CommentServiceModel.class), principal.getName()), CommentResponseModel.class);

    }

    @DeleteMapping("/comment/delete/{commentId}")
    public boolean deleteWorkoutCommentFromWorkout(@PathVariable String commentId, Principal principal) {

        workoutService.deleteWorkoutComment(commentId, principal.getName());

        return true;
    }

}
