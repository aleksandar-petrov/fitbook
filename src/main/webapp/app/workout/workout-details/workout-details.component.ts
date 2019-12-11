import {Component, OnInit} from '@angular/core';
import {Workout} from "../workout.model";
import {WorkoutService} from "../workout.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GetConstantViewNamePipe} from "../../get-constant-view-name.pipe";
import {CommentService} from "../../comment/comment.service";
import {CommentBindingModel} from "../../comment/comment-binding.model";
import {CommentModel} from "../../comment/comment.model";
import {UserAuthModel} from "../../auth/user-auth.model";
import {AuthService} from "../../auth/auth.service";
import {UserService} from "../../user/user.service";
import {UserModel} from "../../user/user.model";

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

    commentBindingModel: CommentBindingModel;
    workoutComments: CommentModel[];
    isLoggedInUserModerator: boolean;
    loggedInUserUsername: string;


    constructor(private workoutService: WorkoutService,
                private commentService: CommentService,
                private userService: UserService,
                private authService: AuthService,
                private route: ActivatedRoute,
                private modalService: NgbModal,
                private router: Router,
                private constantViewPipe: GetConstantViewNamePipe) {
    }

    ngOnInit() {

        this.workout = new Workout();


        this.commentBindingModel = new CommentBindingModel();
        this.workoutComments = [];
        this.authService.user.subscribe((user: UserAuthModel) => {
            this.isLoggedInUserModerator = this.authService.isUserModerator(user.role);
        });

        this.userService.getLoggedInUserObservable().subscribe((user: UserModel) => {
            if (user) {
                this.loggedInUserUsername = user.username;
            }
        });

        this.route.params.subscribe((params: Params) => {
                this.workoutId = params['id'];
                this.fetchWorkoutDetails();
            }
        );

    }

    fetchWorkoutDetails(): void {
        this.workoutService.fetchWorkoutById(this.workoutId).subscribe((workout: Workout) => {
            if (workout) {
                this.workout = workout;
                console.log(workout);
                this.workout
                    .exercises
                    .sort((e1, e2) => e1.orderIndex - e2.orderIndex);
                this.workoutComments = workout.comments;

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

    onLikeHandler() {
        this.workoutService.likeWorkout(this.workout.id).subscribe((workout: Workout) => {
            this.workout = workout;
        });
    }

    onPostHandler() {

        this.commentService.commentWorkout(this.workout.id, this.commentBindingModel).subscribe((comment: CommentModel) => {
            this.commentBindingModel = new CommentBindingModel();
            this.workoutComments.push(comment);
        });
    }

    onDeleteCommentHandler(id: string) {

        this.commentService.deleteWorkoutComment(id).subscribe(() => {
            this.fetchWorkoutDetails();
        })

    }
}
