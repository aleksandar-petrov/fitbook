import {Component, OnInit} from '@angular/core';
import {ExerciseService} from "../exercise.service";
import {Exercise} from "../exercise.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WorkoutExerciseBindingModel} from "../all-exercises/workout-exercise-binding.model";
import {Workout} from "../../workout/workout.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WorkoutService} from "../../workout/workout.service";

@Component({
    selector: 'app-exercise-details',
    templateUrl: './exercise-details.component.html',
    styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

    selectedExercise: Exercise;
    youtubeVideoId: string;

    workoutExerciseBindingModel: WorkoutExerciseBindingModel;
    userWorkouts: Workout[];
    selectedWorkoutId: string;

    constructor(private exerciseService: ExerciseService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private workoutService: WorkoutService,
                private router: Router) {
    }

    ngOnInit() {

        this.selectedExercise = new Exercise();
        this.workoutExerciseBindingModel = new WorkoutExerciseBindingModel();

        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.exerciseService.getExerciseById(params['id']).subscribe((exercise: Exercise) => {
                    this.selectedExercise = exercise;
                    this.youtubeVideoId = this.getYoutubeIdFromUrl(exercise.youtubeURL);
                    this.workoutExerciseBindingModel.exerciseId = exercise.id;
                });
            }
        });


        this.fetchUserWorkouts();
    }

    fetchUserWorkouts() {
        this.workoutService.getLoggedInUserWorkouts().subscribe((workouts: Workout[]) => {
            this.userWorkouts = workouts;
            this.selectedWorkoutId = this.userWorkouts[0].id;
        })
    }

    getYoutubeIdFromUrl(url: string) {
        const regexp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌​=]*)?/g;
        return regexp.exec(url)[1];
    }

    open(content) {


        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {


            this.workoutService.addWorkoutExerciseToWorkout(this.workoutExerciseBindingModel, this.selectedWorkoutId).subscribe((workout: Workout) => {
                this.router.navigate(['my-workouts', workout.id])
            });
            this.selectedWorkoutId = this.userWorkouts[0].id;
            this.workoutExerciseBindingModel = new WorkoutExerciseBindingModel();
        }, (reason) => {
        });
    }

    onPlayerInit(player: YT.Player) {
        player.getIframe().classList.add('embed-responsive-item');
    }
}
