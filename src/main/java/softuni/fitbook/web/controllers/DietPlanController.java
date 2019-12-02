package softuni.fitbook.web.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import softuni.fitbook.domain.models.binding.dietPlan.DietCreateBindingModel;
import softuni.fitbook.domain.models.binding.dietPlan.DietPlanEditBindingModel;
import softuni.fitbook.domain.models.service.dietPlan.DietPlanCreateServiceModel;
import softuni.fitbook.domain.models.service.dietPlan.DietPlanServiceModel;
import softuni.fitbook.domain.models.view.dietPlan.DietPlanViewModel;
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
    public DietPlanViewModel createDietPlan(@RequestBody DietCreateBindingModel model, Principal principal) {

        DietPlanServiceModel dietPlan =
                dietPlanService.createDietPlan(
                        modelMapper.map(model, DietPlanCreateServiceModel.class),
                        principal.getName());

        return modelMapper.map(dietPlan, DietPlanViewModel.class);
    }

    @GetMapping("/my")
    public List<DietPlanViewModel> getLoggedInUserDietPlans(Principal principal) {

        return dietPlanService.getAllDietPlansByUsername(principal.getName())
                .stream()
                .map(wp -> modelMapper.map(wp, DietPlanViewModel.class))
                .collect(Collectors.toList());
    }

    @DeleteMapping("/delete/{dietPlanId}")
    public boolean deleteMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, Principal principal) {

        dietPlanService.deleteMyDietPlanById(dietPlanId, principal.getName());

        return true;
    }

    @PutMapping("/edit/{dietPlanId}")
    public DietPlanViewModel editMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, @RequestBody DietPlanEditBindingModel model, Principal principal) {

        return modelMapper.map(dietPlanService.editMyDietPlanById(dietPlanId, modelMapper.map(model, DietPlanServiceModel.class), principal.getName()), DietPlanViewModel.class);

    }

    @GetMapping("/public/all")
    public List<DietPlanViewModel> getAllPublicDietPlans() {

        return dietPlanService
                .getAllPublicDietPlans()
                .stream()
                .map(w -> modelMapper.map(w, DietPlanViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public DietPlanViewModel getDietPlanById(@PathVariable(value = "id") String id) {

        return modelMapper.map(
                dietPlanService.getDietPlanById(id),
                DietPlanViewModel.class);

    }

    @PostMapping("/copy/{dietPlanId}")
    public DietPlanViewModel copyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, Principal principal) {

        return modelMapper.map(dietPlanService.copyDietPlanToLoggedUserDietPlans(dietPlanId, principal.getName()), DietPlanViewModel.class);

    }

    @PostMapping("/add-diet/{dietPlanId}")
    public DietPlanViewModel addDietFromMyDietsToMyDietPlan(@PathVariable(value = "dietPlanId") String dietPlanId, @RequestParam(value = "dietId") String dietId, Principal principal) {

        return modelMapper.map(dietPlanService.addMealFromMyMealsToMyDietPlan(dietPlanId, dietId, principal.getName()), DietPlanViewModel.class);
    }

    @GetMapping(value = "/export/excel/{dietPlanId}", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public byte[] exportDietPlanToExcel(@PathVariable(value = "dietPlanId") String dietPlanId) {

        return dietPlanService.exportDietPlanToExcel(dietPlanId);
    }


}
