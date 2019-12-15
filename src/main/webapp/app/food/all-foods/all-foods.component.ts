import {Component, OnInit} from '@angular/core';
import {Food} from "../food.model";
import {MealFoodBindingModel} from "../../meal/meal-food-binding-model";
import {Meal} from "../../meal/meal.model";
import {FoodService} from "../food.service";
import {MealService} from "../../meal/meal.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-all-foods',
    templateUrl: './all-foods.component.html',
    styleUrls: ['./all-foods.component.css']
})
export class AllFoodsComponent implements OnInit {

    loading: boolean;

    filteredFoods: Food[] = [];
    allFoods: Food[] = [];
    page: number = 1;
    pageSize: number = 6;


    mealFoodBindingModel: MealFoodBindingModel;
    mealFoodProteinPerServing: number;
    mealFoodCarbohydratesPerServing: number;
    mealFoodFatsPerServing: number;
    mealFoodCaloriesPerServing: number;
    userMeals: Meal[];
    selectedMealId: string;
    selectedFoodForModal: Food;
    macroNutrientsData: any[];

    constructor(private foodService: FoodService,
                private mealService: MealService,
                private modalService: NgbModal,
                private router: Router,
                private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle( 'FitBook' + '- All Foods' );

        this.mealFoodBindingModel = new MealFoodBindingModel();

        this.loading = true;

        this.foodService.getAllFoods().subscribe((foods: Food[]) => {
            this.allFoods = foods;
            this.filteredFoods = [...foods];
            this.loading = false;
        });

        this.fetchUserMeals();
    }

    fetchUserMeals() {
        this.mealService.getLoggedInUserMeals().subscribe((meals: Meal[]) => {
          if (meals) {
            this.userMeals = meals;
            this.selectedMealId = meals[0].id;
          }
        });
    }

    open(content, foodId: any) {
        this.selectedFoodForModal = this.allFoods.find(f => f.id === foodId);
        this.makeChartDataForMacroNutrients();

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {


            this.mealFoodBindingModel.foodId = foodId;
            this.mealService.addMealFoodToMeal(this.mealFoodBindingModel, this.selectedMealId).subscribe((meal: Meal) => {
                this.router.navigate(['my-meals', meal.id])
            });
            this.selectedMealId = this.userMeals[0].id;
            this.mealFoodBindingModel = new MealFoodBindingModel();
        }, (reason) => {
        });
    }

    makeChartDataForMacroNutrients() {

        this.mealFoodProteinPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.proteinPerHundred / 100));
        this.mealFoodCarbohydratesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.carbohydratesPerHundred / 100));
        this.mealFoodFatsPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.fatsPerHundred / 100));
        this.mealFoodCaloriesPerServing = Math.floor(this.mealFoodBindingModel.serving * (this.selectedFoodForModal.caloriesPerHundred / 100));

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
}
