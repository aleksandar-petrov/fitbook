import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-muscle-selector',
  templateUrl: './muscle-selector.component.html',
  styleUrls: ['./muscle-selector.component.css']
})
export class MuscleSelectorComponent implements OnInit {

  majorMuscleGroupSelected: string;
  assistingMuscleGroupsSelected = {
    biceps: false,
    triceps: false,
    forearm: false,
    latisimus: false,
    erectors: false,
    traps: false,
    chest: false,
    anteriorDeltoid: false,
    lateralDeltoid: false,
    posteriorDeltoid: false,
    hamstrings: false,
    gluteus: false,
    calves: false,
    quadriceps: false,
    abs: false,
  };
  focusedMuscleGroup: string;

  constructor() {
  }

  ngOnInit() {
  }

  onMuscleClick(muscleType: string): void {
    if (!this.assistingMuscleGroupsSelected[muscleType] && this.majorMuscleGroupSelected !== muscleType) {
      this.assistingMuscleGroupsSelected[muscleType] = true;
    } else if (this.majorMuscleGroupSelected !== muscleType) {
      this.assistingMuscleGroupsSelected[muscleType] = false;
      this.majorMuscleGroupSelected = muscleType;
    } else {
      this.majorMuscleGroupSelected = undefined;
    }
  }

  onMuscleMouseEnter(muscleType: string): void {
    this.focusedMuscleGroup = muscleType;
  }

  resetSelectedMuscleGroup(): void {
    this.focusedMuscleGroup = undefined;
  }
}
