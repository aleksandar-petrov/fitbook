import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DietPlan} from "../diet-plan.model";

@Component({
  selector: 'app-diet-plan-card',
  templateUrl: './diet-plan-card.component.html',
  styleUrls: ['./diet-plan-card.component.css']
})
export class DietPlanCardComponent implements OnInit {

  @Input() dietPlan: DietPlan;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  copyToMyDietPlansHandler(id: string) {
    this.modalOpen.emit(id);
  }

}
