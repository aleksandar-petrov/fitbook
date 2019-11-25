import {Component, OnInit} from '@angular/core';
import {Workout} from "../workout.model";
import {WorkoutService} from "../workout.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GetConstantViewNamePipe} from "../../get-constant-view-name.pipe";

@Component({
    selector: 'app-workout-details',
    templateUrl: './workout-details.component.html',
    styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {

    workout: Workout;
    workoutId: string;
    exercisesSets: any[];
    customColors: any[];


    constructor(private workoutService: WorkoutService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private router: Router,
                private constantViewPipe: GetConstantViewNamePipe) {
    }

    ngOnInit() {

        this.workout = new Workout();

        this.route.params.subscribe((params: Params) => {
                this.workoutId = params['id'];
                this.fetchWorkoutDetails();
            }
        );

    }

    fetchWorkoutDetails(): void {
        this.workoutService.fetchPublicWorkoutById(this.workoutId).subscribe((workout: Workout) => {
            if (workout) {
                this.workout = workout;
                console.log(workout);
                this.workout
                    .exercises
                    .sort((e1, e2) => e1.orderIndex - e2.orderIndex);

                this.calculateExercisesSets();
            }
        });
    }

    calculateExercisesSets() {
        const workoutExercises = this.workout.exercises;

        const exercisesSets = {};

        workoutExercises.forEach(e => {

            if (!exercisesSets.hasOwnProperty(e.exercise.majorMuscleGroup)) {
                exercisesSets[e.exercise.majorMuscleGroup] = 0;
            }

            exercisesSets[e.exercise.majorMuscleGroup] += e.sets;

            e.exercise.assistingMuscleGroups.forEach(a => {
                if (!exercisesSets.hasOwnProperty(a)) {
                    exercisesSets[a] = 0;
                }

                exercisesSets[a] += e.sets * 0.5;
            });
        });

        const colors = ['#f68d5c',
            '#0dc8f3',
            '#6f2ac2',
            '#84e26b',
            '#86974b',
            '#fa1483',
            '#c2118b',
            '#d79aaf',
            '#f2f0c1',
            '#0ccbb7',
            '#e88ef8',
            '#ccf3f1',
            '#d1fc9e',
            '#dbb005',
            '#2b352b',
            '#781037',
            '#636e8d'];

        const exerciseSetsArray = [];
        const muscleGroupColorsArray = [];

        for (const exercisesSetsKey in exercisesSets) {
            const exercise = {
                name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                value: exercisesSets[exercisesSetsKey]
            };

            const muscleGroupColor = {
                name: this.constantViewPipe.transform(exercisesSetsKey).toUpperCase(),
                value: colors.pop()
            };

            exerciseSetsArray.push(exercise);
            muscleGroupColorsArray.push(muscleGroupColor);

        }

        this.exercisesSets = exerciseSetsArray;
        this.customColors = muscleGroupColorsArray;

    }

    open(content) {


        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

            this.workoutService.copyWorkoutToLoggedUserWorkouts(this.workoutId).subscribe((workout: Workout) => {
                this.router.navigate(['my-workouts', workout.id])
            });
        }, (reason) => {
        });
    }
}
