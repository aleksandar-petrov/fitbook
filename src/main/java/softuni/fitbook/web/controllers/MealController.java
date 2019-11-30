package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.domain.models.binding.meal.MealCreateBindingModel;
import softuni.fitbook.domain.models.binding.meal.MealEditBindingModel;
import softuni.fitbook.domain.models.binding.meal.MealFoodBindingModel;
import softuni.fitbook.domain.models.service.meal.MealCreateServiceModel;
import softuni.fitbook.domain.models.service.meal.MealFoodCreateServiceModel;
import softuni.fitbook.domain.models.service.meal.MealServiceModel;
import softuni.fitbook.domain.models.view.meal.MealViewModel;
import softuni.fitbook.service.MealService;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/meals")
public class MealController {

    private final MealService mealService;
    private final ModelMapper modelMapper;

    @Autowired
    public MealController(MealService mealService, ModelMapper modelMapper) {
        this.mealService = mealService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public MealViewModel createMeal(@RequestBody MealCreateBindingModel model, Principal principal) {

        return modelMapper.map(this.mealService.createMeal(modelMapper.map(model, MealCreateServiceModel.class), principal.getName()), MealViewModel.class);

    }

    @GetMapping("/my")
    public List<MealViewModel> getLoggedInUserMeals(Principal principal) {

        return this.mealService.getAllMealsByUsername(principal.getName())
                .stream()
                .map(s -> modelMapper.map(s, MealViewModel.class))
                .collect(Collectors.toList());

    }

    @PostMapping("/add-exercise/{mealId}")
    public MealViewModel addMealExerciseToMeal(@RequestBody MealFoodBindingModel model, @PathVariable(value = "mealId") String mealId, Principal principal) {

        return modelMapper.map(this.mealService.addMealFoodToMeal(
                this.modelMapper.map(model, MealFoodCreateServiceModel.class)
                , mealId, principal.getName()), MealViewModel.class);
    }


    @DeleteMapping("/delete/{mealId}")
    public boolean deleteMealExerciseFromMeal(@PathVariable String mealId, Principal principal) {

        mealService.deleteMealById(mealId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{mealId}")
    public MealViewModel editMeal(@PathVariable String mealId, @RequestBody MealEditBindingModel model, Principal principal) {

        return modelMapper.map(mealService.editMealById(
                mealId,
                modelMapper.map(model, MealServiceModel.class),
                principal.getName()), MealViewModel.class);

    }

    @GetMapping("/public/all")
    public List<MealViewModel> getAllPublicMeals() {

        return mealService.getAllPublicMeals()
                .stream()
                .map(w -> modelMapper.map(w, MealViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public MealViewModel getMealById(@PathVariable(value = "id") String id) {

        return modelMapper.map(mealService.getMealById(id), MealViewModel.class);
    }

    @PostMapping("/copy/{mealId}")
    public MealViewModel createMeal(@PathVariable(value = "mealId") String mealId, Principal principal) {

        return modelMapper.map(mealService.copyMealToLoggedUserMeals(mealId, principal.getName()), MealViewModel.class);
    }

}
