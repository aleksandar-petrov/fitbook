import {Component, OnInit} from '@angular/core';
import {Exercise} from '../exercise.model';
import {ExerciseService} from '../exercise.service';
import {SelectedMuscleGroupsModel} from '../selected-muscle-groups.model';
import {WorkoutExerciseBindingModel} from "./workout-exercise-binding.model";
import {Workout} from "../../workout/workout.model";
import {WorkoutService} from "../../workout/workout.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

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

  workoutExerciseBindingModel: WorkoutExerciseBindingModel;
  userWorkouts: Workout[];
  selectedWorkoutId: string;
  selectedExerciseForModal: Exercise;


  constructor(private exerciseService: ExerciseService, private workoutService: WorkoutService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {

    this.muscleGroupFilter = new SelectedMuscleGroupsModel();
    this.workoutExerciseBindingModel = new WorkoutExerciseBindingModel();
    this.selectedExerciseForModal = new Exercise();


    this.exerciseService.fetchAllExercises()
      .subscribe((data: Exercise[]) => {
        this.allExercises = data;
        this.filteredExercises = this.allExercises.slice();
      });

    this.fetchUserWorkouts();

  }

  fetchUserWorkouts() {
    this.workoutService.getLoggedInUserWorkouts().subscribe((workouts: Workout[]) => {
      this.userWorkouts = workouts;
      this.selectedWorkoutId = this.userWorkouts[0].id;
    })
  }

  open(content, exerciseId) {

    this.selectedExerciseForModal = this.allExercises.find(e => e.id === exerciseId);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {


      this.workoutExerciseBindingModel.exerciseId = exerciseId;
      this.workoutService.addWorkoutExerciseToWorkout(this.workoutExerciseBindingModel, this.selectedWorkoutId).subscribe((workout: Workout) => {
        this.router.navigate(['my-workouts', workout.id])
      });
      this.selectedWorkoutId = this.userWorkouts[0].id;
      this.workoutExerciseBindingModel = new WorkoutExerciseBindingModel();
    }, (reason) => {
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
          .filter(e => {
            const exerciseInvolvingMuscles = [...e.assistingMuscleGroups];
            exerciseInvolvingMuscles.push(e.majorMuscleGroup);

            return involvingMuscles.every(m => exerciseInvolvingMuscles.includes(m));
          });

    } else {
      this.filteredExercises = this.allExercises.slice();
    }

  }

    onClearFilter() {
      this.muscleGroupFilter = new SelectedMuscleGroupsModel();
      this.handleFilter();
    }
}
