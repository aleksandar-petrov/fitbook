import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../food.service";
import {Food} from "../food.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FoodBindingModel} from "../food-binding.model";
import {Exercise} from "../../exercise/exercise.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-search-food',
    templateUrl: './search-food.component.html',
    styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {

    foodSearchResults: Food[];
    searchFoodName: string;

    selectedFoodForModal: Food;

    foodBindingModel: FoodBindingModel;
    pictureFile: File;
    @ViewChild('chooseFileLabel', {static: false}) chooseFileLabelRef: ElementRef;

    page: number = 1;
    pageSize: number = 6;
    macroNutrientsData: any[];


    constructor(private foodService: FoodService, private modalService: NgbModal, private router: Router) {
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
            this.foodBindingModel = new FoodBindingModel();

            this.selectedFoodForModal.description = resp.description;

            const foodNutrients = resp.foodNutrients;

            for (const foodNutrient of foodNutrients) {

                switch (foodNutrient.nutrient.id) {
                    case 1003:
                        this.selectedFoodForModal.proteinPerHundred = Math.round(foodNutrient.amount);
                        break;
                    case 1005:
                        this.selectedFoodForModal.carbohydratesPerHundred = Math.round(foodNutrient.amount);
                        break;
                    case 1004:
                        this.selectedFoodForModal.fatsPerHundred = Math.round(foodNutrient.amount);
                        break;
                }

            }

            this.makeChartDataForMacroNutrients();

            this.selectedFoodForModal.caloriesPerHundred = Math.round((4 * this.selectedFoodForModal.proteinPerHundred +
                4 * this.selectedFoodForModal.carbohydratesPerHundred + 9 * this.selectedFoodForModal.fatsPerHundred) * 100) / 100;


            this.foodBindingModel = {
                name: '',
                description: this.selectedFoodForModal.description,
                proteinPerHundred: this.selectedFoodForModal.proteinPerHundred,
                carbohydratesPerHundred: this.selectedFoodForModal.carbohydratesPerHundred,
                fatsPerHundred: this.selectedFoodForModal.fatsPerHundred
            }
        });

        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg',
            windowClass: 'modal-edit'
        }).result.then((result) => {
        }, (reason) => {
        });
    }

    handleFileInput(files: FileList) {

        this.pictureFile = files[0];
        this.chooseFileLabelRef.nativeElement.innerHTML = this.pictureFile.name;

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

    onSubmit() {

        const formData = new FormData();
        const foodBlob = new Blob([JSON.stringify(this.foodBindingModel)], {type: 'application/json'});

        formData.append('foodBindingModel', foodBlob);
        formData.append('file', this.pictureFile);

        this.foodService.createFood(formData)
            .subscribe((food: Food) => {
                this.modalService.dismissAll();
                this.router.navigate(['/foods/details/' + food.id])});
    }

}
