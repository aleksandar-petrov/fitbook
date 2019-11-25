import {Component, OnInit} from '@angular/core';
import {FoodService} from "../food.service";
import {Food} from "../food.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-search-food',
    templateUrl: './search-food.component.html',
    styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {

    foodSearchResults: Food[];
    searchFoodName: string;

    selectedFoodForModal: Food;

    page: number = 1;
    pageSize: number = 6;
    macroNutrientsData: any[];


    constructor(private foodService: FoodService, private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    onSearchHandler() {
        this.foodService.fetchFoodsFromDataCentralByFoodName(this.searchFoodName).subscribe((resp: any) => {

            console.log(resp);

            this.foodSearchResults = [];
            this.page = 1;
            resp.foods.forEach(food => {
                const foodInfo = new Food();

                foodInfo.description = food.description;
                foodInfo.id = food.fdcId;

                this.foodSearchResults.push(foodInfo);

            })

        })
    }

    open(content, foodId) {

        this.foodService.fetchFoodDetailsByFoodId(foodId).subscribe((resp: any) => {
            this.selectedFoodForModal = new Food();

            this.selectedFoodForModal.description = resp.description;

            const foodNutrients = resp.foodNutrients;

            for (const foodNutrient of foodNutrients) {

                switch (foodNutrient.nutrient.id) {
                    case 1003: this.selectedFoodForModal.proteinPerHundred = foodNutrient.amount; break;
                    case 1005: this.selectedFoodForModal.carbohydratesPerHundred = foodNutrient.amount; break;
                    case 1004: this.selectedFoodForModal.fatsPerHundred = foodNutrient.amount; break;
                }

            }

            this.makeChartDataForMacroNutrients();

            this.selectedFoodForModal.calories = Math.round((4 * this.selectedFoodForModal.proteinPerHundred +
                4 * this.selectedFoodForModal.carbohydratesPerHundred + 9 * this.selectedFoodForModal.fatsPerHundred) * 100) / 100

        });

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
        }, (reason) => {
        });
    }

    makeChartDataForMacroNutrients() {
        this.macroNutrientsData = [
            {
                "name": "Protein",
                "value": this.selectedFoodForModal.proteinPerHundred,
            },
            {
                "name": "Carbohydrates",
                "value": this.selectedFoodForModal.carbohydratesPerHundred,
            },
            {
                "name": "Fats",
                "value": this.selectedFoodForModal.fatsPerHundred,
            },
        ]
    }

}
