import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Workout} from "../../workout/workout.model";
import {WorkoutPlan} from "../workout-plan.model";

@Component({
  selector: 'app-workout-plan-card',
  templateUrl: './workout-plan-card.component.html',
  styleUrls: ['./workout-plan-card.component.css']
})
export class WorkoutPlanCardComponent implements OnInit {

  @Input() workoutPlan: WorkoutPlan;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  copyToMyWorkoutPlansHandler(id: string) {
    this.modalOpen.emit(id);
  }

}
