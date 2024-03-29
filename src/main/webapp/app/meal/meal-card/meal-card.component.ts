import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Meal} from "../meal.model";
import {Workout} from "../../workout/workout.model";
import {MealService} from "../meal.service";

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input() meal: Meal;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();
  macroNutrientsData: any[];

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.makeChartDataForMacroNutrients();
  }

  makeChartDataForMacroNutrients() {

    this.macroNutrientsData = [
      {
        "name": "Protein",
        "value": this.meal.totalProtein
      },
      {
        "name": "Carbohydrates",
        "value": this.meal.totalCarbohydrates
      },
      {
        "name": "Fats",
        "value": this.meal.totalFats
      },


    ]
  }

  copyToMyMealsHandler(id: string) {
    this.modalOpen.emit(id);
  }

  onLikeHandler() {
    this.mealService.likeMeal(this.meal.id).subscribe((meal: Meal) => {
      this.meal = meal;
    });
  }
}
