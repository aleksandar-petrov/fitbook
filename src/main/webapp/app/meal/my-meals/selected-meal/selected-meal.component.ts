import {Component, OnInit} from "@angular/core";
import {Meal} from "../../meal.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MealService} from "../../meal.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MealFood} from "../../meal-food.model";


@Component({
    selector: 'app-selected-meal',
    templateUrl: './selected-meal.component.html',
    styleUrls: ['./selected-meal.component.css']
})
export class SelectedMealComponent implements OnInit {

    selectedMeal: Meal;
    editMealBindingModel: Meal;
    deletedMealFoodsStack: string[];
    mealId: string;

    editMode = false;
    customColors: any[];
    macroNutrientsData: any[];


    constructor(private route: ActivatedRoute,
                private mealService: MealService,
                private router: Router,
                private modalService: NgbModal) {
    }

    ngOnInit() {

        this.selectedMeal = new Meal();

        this.route.params.subscribe((params: Params) => {
                this.mealId = params['id'];
                this.fetchMealDetails();
            }
        );

        this.route.queryParams.subscribe((queryParams: Params) => {

            if (queryParams['edit']) {
                this.editMode = queryParams['edit'] === '1';
                if (this.editMode) {
                    this.editMealBindingModel = JSON.parse(JSON.stringify(this.selectedMeal));
                    this.editMealBindingModel.isPublic = this.selectedMeal.isPublic;
                    this.deletedMealFoodsStack = [];
                }
            } else {
                this.editMode = false;
            }
        });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl', scrollable: false}).result.then((result) => {
        }, (reason) => {
        });
    }

    fetchMealDetails(): void {
        this.mealService.getLoggedInUserMeals().subscribe((meals: Meal[]) => {
            if (meals) {
                this.selectedMeal = meals.find(w => w.id === this.mealId);
                this.makeChartDataForMacroNutrients();

            }
        });
    }

    makeChartDataForMacroNutrients() {

        const stats = [];

        let counter = 1;
        for (const mealFood of this.selectedMeal.foods) {

            const mealFoodStats = {
                "name": counter++ + '. ' + mealFood.food.name,
                "series": [
                    {
                        "name": 'Protein',
                        "value": mealFood.proteinPerServing
                    },
                    {
                        "name": 'Carbohydrates',
                        "value": mealFood.carbohydratesPerServing
                    },
                    {
                        "name": 'Fats',
                        "value": mealFood.fatsPerServing
                    }
                ]
            };

            stats.push(mealFoodStats);

            this.macroNutrientsData = stats;

        }
    }


    onMealFoodDeleteHandler(mealId: string, foodId: string) {
        this.deletedMealFoodsStack.push(foodId);
        this.editMealBindingModel.foods = this.editMealBindingModel.foods.filter(f => f.id !== foodId);
        this.recalculateBindingModelTotalNutrition();
    }

    deleteMealExercise(mealId: string, foodId: string) {
        this.mealService.deleteMealFoodFromMeal(mealId, foodId).subscribe((meal: Meal) => {
            this.selectedMeal = meal;
        })
    }

    onEditMealFoodHandler(food: MealFood) {

        food.proteinPerServing = Math.floor(food.serving * (food.food.proteinPerHundred / 100));
        food.carbohydratesPerServing = Math.floor(food.serving * (food.food.carbohydratesPerHundred / 100));
        food.fatsPerServing = Math.floor(food.serving * (food.food.fatsPerHundred / 100));
        food.caloriesPerServing = Math.floor(food.serving * (food.food.caloriesPerHundred / 100));

        this.recalculateBindingModelTotalNutrition();

    }


    recalculateBindingModelTotalNutrition() {

        let totalProtein = 0;
        let totalCarbohydrates = 0;
        let totalFats = 0;
        let totalCalories = 0;

        this.editMealBindingModel.foods.forEach(f => {

            totalProtein += f.proteinPerServing;
            totalCarbohydrates += f.carbohydratesPerServing;
            totalFats += f.fatsPerServing;
            totalCalories += f.caloriesPerServing;

        });

        this.editMealBindingModel.totalProtein = totalProtein;
        this.editMealBindingModel.totalCarbohydrates = totalCarbohydrates;
        this.editMealBindingModel.totalFats = totalFats;
        this.editMealBindingModel.totalCalories = totalCalories;

    }

    onSaveHandler() {

        this.mealService.editMealById(this.mealId, this.editMealBindingModel).subscribe((meal: Meal) => {
            console.log(meal.isPublic, 1);
            this.selectedMeal = meal;
            this.makeChartDataForMacroNutrients();
        });

        this.router.navigate(['./'], {relativeTo: this.route});
    }

    onMealDeleteHandler(mealId: string) {

        this.mealService.deleteMealById(mealId).subscribe(result => {
            if (result) {
                this.router.navigate(['/my-meals']);
            }
        })

    }


}
