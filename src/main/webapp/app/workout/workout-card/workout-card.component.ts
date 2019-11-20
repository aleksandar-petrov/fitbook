import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Exercise} from "../../exercise/exercise.model";
import {Workout} from "../workout.model";

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent implements OnInit {

  @Input() workout: Workout;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  copyToMyWorkoutsHandler(id: string) {
    this.modalOpen.emit(id);
  }

}
