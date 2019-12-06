package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import softuni.fitbook.domain.models.binding.dietPlan.DietPlanCreateBindingModel;
import softuni.fitbook.domain.models.binding.dietPlan.DietPlanEditBindingModel;
import softuni.fitbook.domain.models.service.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.domain.models.service.dietPlan.DietPlanServiceModel;
import softuni.fitbook.domain.models.response.dietPlan.DietPlanResponseModel;
import softuni.fitbook.service.DietPlanService;

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
    public DietPlanResponseModel createDietPlan(@RequestBody DietPlanCreateBindingModel model, Principal principal) {

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
    public DietPlanResponseModel editMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, @RequestBody DietPlanEditBindingModel model, Principal principal) {

        return modelMapper.map(dietPlanService.editMyDietPlanById(dietPlanId, modelMapper.map(model, DietPlanServiceModel.class), principal.getName()), DietPlanResponseModel.class);

    }

    @GetMapping("/public/all")
    public List<DietPlanResponseModel> getAllPublicDietPlans() {

        return dietPlanService
                .getAllPublicDietPlans()
                .stream()
                .map(w -> modelMapper.map(w, DietPlanResponseModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public DietPlanResponseModel getDietPlanById(@PathVariable(value = "id") String id) {

        return modelMapper.map(
                dietPlanService.getDietPlanById(id),
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


}
