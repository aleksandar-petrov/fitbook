import {Component, OnInit} from '@angular/core';
import {Meal} from "../meal.model";
import {MealService} from "../meal.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-meal-details',
    templateUrl: './meal-details.component.html',
    styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

    meal: Meal;
    mealId: string;
    macroNutrientsData: any[];


    constructor(private mealService: MealService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private router: Router) {
    }

    ngOnInit() {

        this.meal = new Meal();

        this.route.params.subscribe((params: Params) => {
                this.mealId = params['id'];
                this.fetchMealDetails();
            }
        );

    }

    fetchMealDetails(): void {
        this.mealService.fetchMealById(this.mealId).subscribe((meal: Meal) => {
            if (meal) {
                this.meal = meal;

                this.makeChartDataForMacroNutrients();
            }
        });
    }

    makeChartDataForMacroNutrients() {

        const stats = [];

        let counter = 1;
        for (const mealFood of this.meal.foods) {

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

    open(content) {


        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {

            this.mealService.copyMealToLoggedUserMeals(this.mealId).subscribe((meal: Meal) => {
                this.router.navigate(['my-meals', meal.id])
            });
        }, (reason) => {
        });
    }

}
