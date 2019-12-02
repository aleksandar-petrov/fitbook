import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Workout} from "../../workout/workout.model";
import {Meal} from "../meal.model";

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input() meal: Meal;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  copyToMyMealsHandler(id: string) {
    this.modalOpen.emit(id);
  }
}
