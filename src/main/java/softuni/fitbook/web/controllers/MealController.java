package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;
import softuni.fitbook.web.controllers.models.request.meal.MealCreateRequestModel;
import softuni.fitbook.web.controllers.models.request.meal.MealEditRequestModel;
import softuni.fitbook.web.controllers.models.request.meal.MealFoodRequestModel;
import softuni.fitbook.services.models.meal.MealCreateServiceModel;
import softuni.fitbook.services.models.meal.MealFoodCreateServiceModel;
import softuni.fitbook.services.models.meal.MealServiceModel;
import softuni.fitbook.web.controllers.models.response.CommentResponseModel;
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
    public List<MealResponseModel> getAllPublicMeals(Principal principal) {

        return mealService.getAllPublicMeals(principal.getName())
                .stream()
                .map(w -> modelMapper.map(w, MealResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public MealResponseModel getMealById(@PathVariable(value = "id") String id, Principal principal) {

        return modelMapper.map(mealService.getMealById(id, principal.getName()), MealResponseModel.class);
    }

    @PostMapping("/copy/{mealId}")
    public MealResponseModel createMeal(@PathVariable(value = "mealId") String mealId, Principal principal) {

        return modelMapper.map(mealService.copyMealToLoggedUserMeals(mealId, principal.getName()), MealResponseModel.class);
    }

    @PostMapping("/like/{mealId}")
    public MealResponseModel likeMeal(@PathVariable String mealId, Principal principal) {

        return modelMapper.map(mealService.likeMeal(mealId, principal.getName()), MealResponseModel.class);

    }

    @PostMapping("/comment/{mealId}")
    public CommentResponseModel commentMeal(@PathVariable String mealId, @RequestBody CommentRequestModel model, Principal principal) {

        return modelMapper.map(mealService.commentMeal(mealId, modelMapper.map(model, CommentServiceModel.class), principal.getName()), CommentResponseModel.class);

    }

    @DeleteMapping("/comment/delete/{commentId}")
    public void deleteMealCommentFromMeal(@PathVariable String commentId, Principal principal) {

        mealService.deleteMealComment(commentId, principal.getName());
    }

}
