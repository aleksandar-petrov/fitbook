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
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;
    private final ModelMapper modelMapper;

    @Autowired
    public ExerciseController(ExerciseService exerciseService, ModelMapper modelMapper) {
        this.exerciseService = exerciseService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/all")
    public List<AllExercisesExerciseViewModel> getAllExercises() {
        return exerciseService
                .getAllExercises()
                .stream()
                .map(e -> modelMapper
                        .map(e, AllExercisesExerciseViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/details/{id}")
    public AllExercisesExerciseViewModel exerciseDetailsById(@PathVariable(value = "id") String id) {

        return modelMapper.map(exerciseService.getExerciseById(id), AllExercisesExerciseViewModel.class);

    }

    @PostMapping("/create")
    public AllExercisesExerciseViewModel createExercise(@RequestPart("exerciseBindingModel") ExerciseCreateBindingModel model, @RequestPart("file") MultipartFile file) {

        return modelMapper.map(
                exerciseService.createExercise(modelMapper.map(model, ExerciseCreateServiceModel.class), file), AllExercisesExerciseViewModel.class);

    }

}
