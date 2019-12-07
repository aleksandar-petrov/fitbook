package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.web.controllers.models.request.meal.MealCreateRequestModel;
import softuni.fitbook.web.controllers.models.request.meal.MealEditRequestModel;
import softuni.fitbook.web.controllers.models.request.meal.MealFoodRequestModel;
import softuni.fitbook.services.models.meal.MealCreateServiceModel;
import softuni.fitbook.services.models.meal.MealFoodCreateServiceModel;
import softuni.fitbook.services.models.meal.MealServiceModel;
import softuni.fitbook.web.controllers.models.response.meal.MealResponseModel;
import softuni.fitbook.services.MealService;

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
    public MealResponseModel createMeal(@RequestBody MealCreateRequestModel model, Principal principal) {

        return modelMapper.map(this.mealService.createMeal(modelMapper.map(model, MealCreateServiceModel.class), principal.getName()), MealResponseModel.class);

    }

    @GetMapping("/my")
    public List<MealResponseModel> getLoggedInUserMeals(Principal principal) {

        return this.mealService.getAllMealsByUsername(principal.getName())
                .stream()
                .map(s -> modelMapper.map(s, MealResponseModel.class))
                .collect(Collectors.toList());

    }

    @PostMapping("/add-exercise/{mealId}")
    public MealResponseModel addMealExerciseToMeal(@RequestBody MealFoodRequestModel model, @PathVariable(value = "mealId") String mealId, Principal principal) {

        return modelMapper.map(this.mealService.addMealFoodToMeal(
                this.modelMapper.map(model, MealFoodCreateServiceModel.class)
                , mealId, principal.getName()), MealResponseModel.class);
    }


    @DeleteMapping("/delete/{mealId}")
    public boolean deleteMealExerciseFromMeal(@PathVariable String mealId, Principal principal) {

        mealService.deleteMealById(mealId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{mealId}")
    public MealResponseModel editMeal(@PathVariable String mealId, @RequestBody MealEditRequestModel model, Principal principal) {

        return modelMapper.map(mealService.editMealById(
                mealId,
                modelMapper.map(model, MealServiceModel.class),
                principal.getName()), MealResponseModel.class);

    }

    @GetMapping("/public/all")
    public List<MealResponseModel> getAllPublicMeals() {

        return mealService.getAllPublicMeals()
                .stream()
                .map(w -> modelMapper.map(w, MealResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public MealResponseModel getMealById(@PathVariable(value = "id") String id) {

        return modelMapper.map(mealService.getMealById(id), MealResponseModel.class);
    }

    @PostMapping("/copy/{mealId}")
    public MealResponseModel createMeal(@PathVariable(value = "mealId") String mealId, Principal principal) {

        return modelMapper.map(mealService.copyMealToLoggedUserMeals(mealId, principal.getName()), MealResponseModel.class);
    }

}
