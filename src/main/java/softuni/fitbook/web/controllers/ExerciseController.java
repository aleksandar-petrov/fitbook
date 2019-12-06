package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.binding.ExerciseCreateBindingModel;
import softuni.fitbook.domain.models.service.exercise.ExerciseCreateServiceModel;
import softuni.fitbook.domain.models.response.exercise.AllExercisesResponseViewModel;
import softuni.fitbook.service.ExerciseService;

import java.util.List;
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
    public List<AllExercisesResponseViewModel> getAllExercises() {
        return exerciseService
                .getAllExercises()
                .stream()
                .map(e -> modelMapper
                        .map(e, AllExercisesResponseViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/details/{id}")
    public AllExercisesResponseViewModel exerciseDetailsById(@PathVariable(value = "id") String id) {

        return modelMapper.map(exerciseService.getExerciseById(id), AllExercisesResponseViewModel.class);

    }

    @PostMapping("/create")
    public AllExercisesResponseViewModel createExercise(@RequestPart("exerciseBindingModel") ExerciseCreateBindingModel model, @RequestPart("file") MultipartFile file) {

        return modelMapper.map(
                exerciseService.createExercise(modelMapper.map(model, ExerciseCreateServiceModel.class), file), AllExercisesResponseViewModel.class);

    }

}
