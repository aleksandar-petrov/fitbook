package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;
import softuni.fitbook.services.DietPlanService;
import softuni.fitbook.services.models.CommentServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;
import softuni.fitbook.web.controllers.models.request.CommentRequestModel;
import softuni.fitbook.web.controllers.models.request.dietPlan.DietPlanCreateRequestModel;
import softuni.fitbook.web.controllers.models.request.dietPlan.DietPlanEditRequestModel;
import softuni.fitbook.web.controllers.models.response.CommentResponseModel;
import softuni.fitbook.web.controllers.models.response.dietPlan.DietPlanResponseModel;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "api/diet-plans/")
public class DietPlanController {

    private final DietPlanService dietPlanService;
    private final ModelMapper modelMapper;

    public DietPlanController(DietPlanService dietPlanService, ModelMapper modelMapper) {
        this.dietPlanService = dietPlanService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/create")
    public DietPlanResponseModel createDietPlan(@RequestBody DietPlanCreateRequestModel model, Principal principal) {

        DietPlanServiceModel dietPlan =
                dietPlanService.createDietPlan(
                        modelMapper.map(model, DietPlanCreateServiceModel.class),
                        principal.getName());

        return modelMapper.map(dietPlan, DietPlanResponseModel.class);
    }

    @GetMapping("/my")
    public List<DietPlanResponseModel> getLoggedInUserDietPlans(Principal principal) {

        return dietPlanService.getAllDietPlansByUsername(principal.getName())
                .stream()
                .map(wp -> modelMapper.map(wp, DietPlanResponseModel.class))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{dietPlanId}")
    public boolean deleteMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, Principal principal) {

        dietPlanService.deleteMyDietPlanById(dietPlanId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{dietPlanId}")
    public DietPlanResponseModel editMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, @RequestBody DietPlanEditRequestModel model, Principal principal) {

        return modelMapper.map(dietPlanService.editMyDietPlanById(dietPlanId, modelMapper.map(model, DietPlanServiceModel.class), principal.getName()), DietPlanResponseModel.class);

    }

    @GetMapping("/public/all")
    public List<DietPlanResponseModel> getAllPublicDietPlans(Principal principal) {

        return dietPlanService
                .getAllPublicDietPlans(principal.getName())
                .stream()
                .map(w -> modelMapper.map(w, DietPlanResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public DietPlanResponseModel getDietPlanById(@PathVariable(value = "id") String id, Principal principal) {

        return modelMapper.map(
                dietPlanService.getDietPlanById(id, principal.getName()),
                DietPlanResponseModel.class);

    }

    @PostMapping("/copy/{dietPlanId}")
    public DietPlanResponseModel copyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, Principal principal) {

        return modelMapper.map(dietPlanService.copyDietPlanToLoggedUserDietPlans(dietPlanId, principal.getName()), DietPlanResponseModel.class);

    }

    @PostMapping("/add-meal/{dietPlanId}")
    public DietPlanResponseModel addMealFromMyMealsToMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, @RequestParam(value = "mealId") String mealId, Principal principal) {

        return modelMapper.map(dietPlanService.addMealFromMyMealsToMyDietPlan(dietPlanId, mealId, principal.getName()), DietPlanResponseModel.class);
    }

    @GetMapping(value = "/export/excel/{dietPlanId}", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public byte[] exportDietPlanToExcel(@PathVariable(value = "dietPlanId") String dietPlanId) {

        return dietPlanService.exportDietPlanToExcel(dietPlanId);
    }

    @PostMapping("/like/{dietPlanId}")
    public DietPlanResponseModel likeDietPlan(@PathVariable String dietPlanId, Principal principal) {

        return modelMapper.map(dietPlanService.likeDietPlan(dietPlanId, principal.getName()), DietPlanResponseModel.class);

    }

    @PostMapping("/comment/{dietPlanId}")
    public CommentResponseModel commentDietPlan(@PathVariable String dietPlanId, @RequestBody CommentRequestModel model, Principal principal) {

        return modelMapper.map(dietPlanService.commentDietPlan(dietPlanId, modelMapper.map(model, CommentServiceModel.class), principal.getName()), CommentResponseModel.class);

    }

    @DeleteMapping("/comment/delete/{commentId}")
    public void deleteDietPlanCommentFromDietPlan(@PathVariable String commentId, Principal principal) {

        dietPlanService.deleteDietPlanComment(commentId, principal.getName());
    }


}
