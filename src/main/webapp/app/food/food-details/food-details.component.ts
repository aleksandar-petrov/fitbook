import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FoodService} from "../food.service";
import {Food} from "../food.model";
import {MealFoodBindingModel} from "../../meal/meal-food-binding-model";
import {Meal} from "../../meal/meal.model";
import {MealService} from "../../meal/meal.service";

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  selectedFood: Food;
  macroNutrientsData: any[];

  mealFoodBindingModel: MealFoodBindingModel;
  mealFoodProteinPerServing: number;
  mealFoodCarbohydratesPerServing: number;
  mealFoodFatsPerServing: number;
  mealFoodCaloriesPerServing: number;
  userMeals: Meal[];
  selectedMealId: string;

  constructor(private foodService: FoodService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private mealService: MealService,
              private router: Router) {
  }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.selectedFood = new Food();
    this.mealFoodBindingModel = new MealFoodBindingModel();

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.foodService.getFoodById(params['id']).subscribe((food: Food) => {
          this.selectedFood = food;
          this.mealFoodBindingModel.foodId = food.id;

          this.makeChartDataForMacroNutrients();
        });
      }
    });


    this.fetchUserMeals();
  }

  makeChartDataForMacroNutrients() {

    this.mealFoodProteinPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.proteinPerHundred / 100));
    this.mealFoodCarbohydratesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.carbohydratesPerHundred / 100));
    this.mealFoodFatsPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.fatsPerHundred / 100));
    this.mealFoodCaloriesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFood.caloriesPerHundred / 100));

    this.macroNutrientsData = [
      {
        "name": "Protein",
        "value": this.mealFoodProteinPerServing
      },
      {
        "name": "Carbohydrates",
        "value": this.mealFoodCarbohydratesPerServing
      },
      {
        "name": "Fats",
        "value": this.mealFoodFatsPerServing
      },


    ]
  }

  fetchUserMeals() {
    this.mealService.getLoggedInUserMeals().subscribe((meals: Meal[]) => {
      this.userMeals = meals;
      this.selectedMealId = this.userMeals[0].id;
    })
  }

  open(content) {


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', }).result.then((result) => {


      this.mealService.addMealFoodToMeal(this.mealFoodBindingModel, this.selectedMealId).subscribe((meal: Meal) => {
        this.router.navigate(['my-meals', meal.id])
      });
      this.selectedMealId = this.userMeals[0].id;
      this.mealFoodBindingModel = new MealFoodBindingModel();
    }, (reason) => {

      this.mealFoodBindingModel = new MealFoodBindingModel();

    });
  }

}
