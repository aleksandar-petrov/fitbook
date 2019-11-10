import {Component, OnInit} from '@angular/core';
import {Exercise} from '../exercise.model';
import {ExerciseService} from '../exercise.service';
import {SelectedMuscleGroupsModel} from '../selected-muscle-groups.model';

@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.css']
})


export class AllExercisesComponent implements OnInit {

  filteredExercises: Exercise[] = [];
  allExercises: Exercise[] = [];
  page: number = 1;
  pageSize: number = 6;

  muscleGroupFilter: SelectedMuscleGroupsModel;
  focusedMuscleGroup: string;


  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {

    this.muscleGroupFilter = new SelectedMuscleGroupsModel();

    this.exerciseService.fetchAllExercises()
      .subscribe((data: Exercise[]) => {
        this.allExercises = data;
        this.filteredExercises = this.allExercises.slice();
        console.log(data);
      });

  }

  onMuscleMouseEnter(muscleType: string) {
    this.focusedMuscleGroup = muscleType;
  }

  resetSelectedMuscleGroup() {
    this.focusedMuscleGroup = undefined;
  }

  onMuscleClick(muscleType: string) {
    this.muscleGroupFilter[muscleType] = !this.muscleGroupFilter[muscleType];
    this.handleFilter()
  }

  handleFilter() {
    const filterModeOn = [...Object.values(this.muscleGroupFilter)].some(b => b === true);

    if (filterModeOn) {

      const involvingMuscles = Object.keys(this.muscleGroupFilter).filter(m => this.muscleGroupFilter[m] === true);


      this.filteredExercises =
        this.allExercises
          .slice()
          .filter(e => involvingMuscles.includes(e.majorMuscleGroup) || e.assistingMuscleGroups.every(m => e.assistingMuscleGroups.includes(m)));

    } else {
      this.filteredExercises = this.allExercises.slice();
    }

  }
}
