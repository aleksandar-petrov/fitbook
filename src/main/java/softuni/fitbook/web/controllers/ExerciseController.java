package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.binding.ExerciseCreateBindingModel;
import softuni.fitbook.domain.models.service.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.domain.models.view.exercise.AllExercisesExerciseViewModel;
import softuni.fitbook.service.ExerciseService;

import java.net.URISyntaxException;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;
    private final ModelMapper modelMapper;

    @Autowired
    public ExerciseController(ExerciseService exerciseService, ModelMapper modelMapper) {
        this.exerciseService = exerciseService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/all", produces = "application/json")
    public Set<AllExercisesExerciseViewModel> allWatches() {
        return this
                .exerciseService
                .getAllExercises()
                .stream()
                .map(e -> this.modelMapper
                        .map(e, AllExercisesExerciseViewModel.class))
                .collect(Collectors.toSet());
    }

    @PostMapping("/create")
    public ResponseEntity createExercise(@RequestPart("exerciseBindingModel") ExerciseCreateBindingModel model, @RequestPart("file") MultipartFile file) throws URISyntaxException {

        this.exerciseService.createExercise(this.modelMapper.map(model, ExerciseCreateServiceModel.class), file);

        return ResponseEntity.ok().build();
    }

}
