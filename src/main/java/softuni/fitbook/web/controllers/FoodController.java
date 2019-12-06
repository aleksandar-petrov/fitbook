package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.domain.models.binding.FoodCreateBindingModel;
import softuni.fitbook.domain.models.service.food.FoodCreateServiceModel;
import softuni.fitbook.domain.models.response.exercise.AllExercisesResponseViewModel;
import softuni.fitbook.domain.models.response.food.FoodResponseModel;
import softuni.fitbook.service.FoodService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/foods")
public class FoodController {

    private final FoodService foodService;
    private final ModelMapper modelMapper;

    @Autowired
    public FoodController(FoodService foodService, ModelMapper modelMapper) {
        this.foodService = foodService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public AllExercisesResponseViewModel createExercise(@RequestPart("foodBindingModel") FoodCreateBindingModel model, @RequestPart("file") MultipartFile file) {

        return modelMapper.map(
                foodService.createFood(modelMapper.map(model, FoodCreateServiceModel.class), file), AllExercisesResponseViewModel.class);

    }

    @GetMapping(value = "/all")
    public List<FoodResponseModel> getAllExercises() {
        return foodService
                .getAllFoods()
                .stream()
                .map(e -> modelMapper
                        .map(e, FoodResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/details/{id}")
    public FoodResponseModel exerciseDetailsById(@PathVariable(value = "id") String id) {

        return modelMapper.map(foodService.getFoodById(id), FoodResponseModel.class);

    }
}
