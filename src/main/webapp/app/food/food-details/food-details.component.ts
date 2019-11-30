import { Component, OnInit } from '@angular/core';
import {Exercise} from "../../exercise/exercise.model";
import {WorkoutExerciseBindingModel} from "../../exercise/all-exercises/workout-exercise-binding.model";
import {Workout} from "../../workout/workout.model";
import {ExerciseService} from "../../exercise/exercise.service";
import {ActivatedRoute, NavigationEnd, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WorkoutService} from "../../workout/workout.service";
import {FoodService} from "../food.service";
import {Food} from "../food.model";
import {MealFoodBindingModel} from "../../meal/meal-food-binding-model";

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  selectedFood: Food;
  macroNutrientsData: any[];

  mealFoodBindingModel: MealFoodBindingModel;
  // userMeals: Meal[];
  selectedMealId: string;

  constructor(private foodService: FoodService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              // private mealService: MealService,
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
    // this.mealFoodBindingModel = new MealFoodBindingModel();

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.foodService.getFoodById(params['id']).subscribe((food: Food) => {
          this.selectedFood = food;
          console.log(this.selectedFood);
          // this.mealFoodBindingModel.foodId = food.id;

          this.makeChartDataForMacroNutrients();
        });
      }
    });


    // this.fetchUserMeals();
  }

  makeChartDataForMacroNutrients() {
    this.macroNutrientsData = [
      {
        "name": "Protein",
        "value": this.selectedFood.proteinPerHundred,
      },
      {
        "name": "Carbohydrates",
        "value": this.selectedFood.carbohydratesPerHundred,
      },
      {
        "name": "Fats",
        "value": this.selectedFood.fatsPerHundred,
      },
    ]
  }

  // fetchUserMeals() {
  //   this.mealService.getLoggedInUserMeals().subscribe((meals: Meal[]) => {
  //     this.userMeals = meals;
  //     this.selectedMealId = this.userMeals[0].id;
  //   })
  // }

  open(content) {


    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //
    //
    //   this.mealService.addMealFoodToMeal(this.mealFoodBindingModel, this.selectedMealId).subscribe((meal: Meal) => {
    //     this.router.navigate(['my-meals', meal.id])
    //   });
    //   this.selectedMealId = this.userMeals[0].id;
    //   this.mealFoodBindingModel = new MealFoodBindingModel();
    // }, (reason) => {
    // });
  }

}
