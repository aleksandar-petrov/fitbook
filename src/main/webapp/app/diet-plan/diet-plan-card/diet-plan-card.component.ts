import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DietPlan} from "../diet-plan.model";
import {Workout} from "../../workout/workout.model";
import {DietPlanService} from "../diet-plan.service";

@Component({
  selector: 'app-diet-plan-card',
  templateUrl: './diet-plan-card.component.html',
  styleUrls: ['./diet-plan-card.component.css']
})
export class DietPlanCardComponent implements OnInit {

  @Input() dietPlan: DietPlan;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();
  macroNutrientsData: any[];

  constructor(private dietPlanService: DietPlanService) { }

  ngOnInit() {
    this.makeChartDataForMacroNutrients();
  }

  makeChartDataForMacroNutrients() {

    this.macroNutrientsData = [
      {
        "name": "Protein",
        "value": this.dietPlan.totalProtein
      },
      {
        "name": "Carbohydrates",
        "value": this.dietPlan.totalCarbohydrates
      },
      {
        "name": "Fats",
        "value": this.dietPlan.totalFats
      },


    ]
  }

  copyToMyDietPlansHandler(id: string) {
    this.modalOpen.emit(id);
  }

  onLikeHandler() {
    this.dietPlanService.likeDietPlan(this.dietPlan.id).subscribe((dietPlan: DietPlan) => {
      this.dietPlan = dietPlan;
    });
  }

}
