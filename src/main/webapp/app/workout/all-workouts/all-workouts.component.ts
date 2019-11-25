import {Component, OnInit} from '@angular/core';
import {WorkoutService} from "../workout.service";
import {Workout} from "../workout.model";
import {Exercise} from "../../exercise/exercise.model";
import {WorkoutExerciseBindingModel} from "../../exercise/all-exercises/workout-exercise-binding.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
    selector: 'app-all-workouts',
    templateUrl: './all-workouts.component.html',
    styleUrls: ['./all-workouts.component.css']
})
export class AllWorkoutsComponent implements OnInit {

    workouts: Workout[];
    filteredWorkouts: Workout[];
    page: number = 1;
    pageSize: number = 6;

    selectedWorkoutId: string;
    selectedWorkoutForModal: Workout;

    constructor(private workoutService: WorkoutService, private modalService: NgbModal, private router: Router) {
    }

    ngOnInit() {

        this.workoutService.fetchAllPublicWorkouts().subscribe((workouts: Workout[]) => {
            if (workouts) {
                this.workouts = workouts;
                this.filteredWorkouts = [...workouts];
            }
        });


    }

    open(content, workoutId) {

        this.selectedWorkoutForModal = this.workouts.find(e => e.id === workoutId);

        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

            this.workoutService.copyWorkoutToLoggedUserWorkouts(workoutId).subscribe((workout: Workout) => {
                this.router.navigate(['my-workouts', workout.id])
            });
        }, (reason) => {
        });
    }

}