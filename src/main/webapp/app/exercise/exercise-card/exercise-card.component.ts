import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Exercise} from '../exercise.model';
import {GetConstantViewNamePipe} from '../../get-constant-view-name.pipe';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise: Exercise;
  @Output() modalOpen: EventEmitter<any> = new EventEmitter();

  assistingMuscleGroups: string[];

  constructor(private musclePipe: GetConstantViewNamePipe) { }



  ngOnInit() {
    this.assistingMuscleGroups = this.exercise.assistingMuscleGroups.map(a => this.musclePipe.transform(a))
  }


  addToWorkoutHandler(id: string) {
    this.modalOpen.emit(id);
  }
}
