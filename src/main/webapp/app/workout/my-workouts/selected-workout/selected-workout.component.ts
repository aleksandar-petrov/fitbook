import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Workout} from "../../workout.model";
import {ActivatedRoute, Params, Router, UrlSegment} from "@angular/router";
import {DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {WorkoutService} from "../../workout.service";
import {GetConstantViewNamePipe} from "../../../get-constant-view-name.pipe";
import {WorkoutBindingModel} from "../../workout-binding-model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-selected-workout',
    templateUrl: './selected-workout.component.html',
    styleUrls: ['./selected-workout.component.css']
})
export class SelectedWorkoutComponent implements OnInit {

    @Output() workoutDelete: EventEmitter<any> = new EventEmitter();

    selectedWorkout: Workout;
    editWorkoutBindingModel: Workout;
    deletedWorkoutExercisesStack: string[];
    workoutId: string;

    editMode = false;
    exercisesSets: any[];
    customColors: any[];


    constructor(private route: ActivatedRoute,
                private workoutService: WorkoutService,
                private router: Router,
                private constantViewPipe: GetConstantViewNamePipe,
                private modalService: NgbModal) {
    }

    ngOnInit() {

        this.selectedWorkout = new Workout();

        this.route.params.subscribe((params: Params) => {
                this.workoutId = params['id'];
                this.fetchWorkoutDetails();
            }
        );

        this.route.queryParams.subscribe((queryParams: Params) => {

            if (queryParams['edit']) {
                this.editMode = queryParams['edit'] === '1';
                if (this.editMode) {
                    this.editWorkoutBindingModel = Object.assign({}, this.selectedWorkout);
                    this.editWorkoutBindingModel.isPublic = this.selectedWorkout.isPublic;
                    this.deletedWorkoutExercisesStack = [];
                }
            } else {
                this.editMode = false;
            }
        });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
        }, (reason) => {
        });
    }

    fetchWorkoutDetails(): void {
        this.workoutService.getLoggedInUserWorkouts().subscribe((workouts: Workout[]) => {
            if (workouts) {
                this.selectedWorkout = workouts.find(w => w.id === this.workoutId);

                this.selectedWorkout
                    .exercises
                    .sort((e1, e2) => e1.orderIndex - e2.orderIndex);

                this.calculateExercisesSets();

            }
        });
    }

    calculateExercisesSets() {
        const workoutExercises = this.selectedWorkout.exercises;

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

            exerciseSetsArray.push(exercise);


        }

        this.exercisesSets = exerciseSetsArray;
        this.customColors = muscleGroupColorsArray;
    }

    onWorkoutExerciseDeleteHandler(workoutId: string, exerciseId: string) {
        this.deletedWorkoutExercisesStack.push(exerciseId);
        this.editWorkoutBindingModel.exercises = this.editWorkoutBindingModel.exercises.filter(e => e.id !== exerciseId);
        this.rearrangeOrderIndexes();
    }

    deleteWorkoutExercise(workoutId: string, exerciseId: string) {
        this.workoutService.deleteWorkoutExerciseFromWorkout(workoutId, exerciseId).subscribe((workout: Workout) => {
            this.selectedWorkout = workout;
        })
    }

    onSaveHandler() {

        this.workoutService.editWorkoutById(this.workoutId, this.editWorkoutBindingModel).subscribe((workout: Workout) => {
            console.log(workout.isPublic, 1);
            this.selectedWorkout = workout;
            this.calculateExercisesSets();
        });

        this.router.navigate(['./'], {relativeTo: this.route});
    }

    onWorkoutDeleteHandler(workoutId: string) {

        this.workoutService.deleteWorkoutById(workoutId).subscribe(result => {
            if (result) {
                this.workoutDelete.emit();
                this.router.navigate(['/my-workouts']);
            }
        })

    }

    onDrop(event: any) {
        moveItemInArray(this.editWorkoutBindingModel.exercises, event.previousIndex, event.currentIndex);
        this.rearrangeOrderIndexes();
    }

    rearrangeOrderIndexes() {
        const exercises = this.editWorkoutBindingModel.exercises;

        for (let i = 0; i < exercises.length; i++) {
            exercises[i].orderIndex = i + 1;
        }
    }
}
