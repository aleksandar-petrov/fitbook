import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GetConstantViewNamePipe} from "../../get-constant-view-name.pipe";
import {WorkoutPlan} from "../workout-plan.model";
import {WorkoutPlanService} from "../workout-plan.service";
import {CommentModel} from "../../comment/comment.model";
import {CommentBindingModel} from "../../comment/comment-binding.model";
import {CommentService} from "../../comment/comment.service";

import {UserAuthModel} from "../../auth/user-auth.model";
import {UserModel} from "../../user/user.model";
import {AuthService} from "../../auth/auth.service";
import {UserService} from "../../user/user.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-workout-plan-details',
  templateUrl: './workout-plan-details.component.html',
  styleUrls: ['./workout-plan-details.component.css']
})
export class WorkoutPlanDetailsComponent implements OnInit {

  workoutPlan: WorkoutPlan;
  workoutPlanId: string;
  exercisesSets: any[];
  customColors: any[];

  commentBindingModel: CommentBindingModel;
  workoutPlanComments: CommentModel[];
  isLoggedInUserModerator: boolean;
  loggedInUserUsername: string;


  constructor(private workoutPlanService: WorkoutPlanService,
              private authService: AuthService,
              private userService: UserService,
              private commentService: CommentService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router,
              private constantViewPipe: GetConstantViewNamePipe, private titleService: Title) {
  }

  ngOnInit() {

    this.titleService.setTitle( 'FitBook' + '- Workout Plan Details' );

    this.workoutPlan = new WorkoutPlan();

    this.commentBindingModel = new CommentBindingModel();
    this.workoutPlanComments = [];
    this.authService.user.subscribe((user: UserAuthModel) => {
      this.isLoggedInUserModerator = this.authService.isUserModerator(user.role);
    });

    this.userService.getLoggedInUserObservable().subscribe((user: UserModel) => {
      if (user) {
        this.loggedInUserUsername = user.username;
      }
    });

    this.route.params.subscribe((params: Params) => {

          this.workoutPlanId = params['id'];
          this.fetchWorkoutPlanDetails();
        }
    );

  }

  fetchWorkoutPlanDetails(): void {
    this.workoutPlanService.getWorkoutPlanById(this.workoutPlanId).subscribe((workoutPlan: WorkoutPlan) => {
      if (workoutPlan) {
        this.workoutPlan = workoutPlan;
        this.workoutPlanComments = workoutPlan.comments;
        this.calculateExercisesSets();
      }
    });
  }

  calculateExercisesSets() {

    const exerciseSetsArray = [];
    const muscleGroupColorsArray = [];

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

    const exercisesSets = {};

    for (const workout of this.workoutPlan.workouts) {
      const workoutExercises = workout.workout.exercises;


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
    }

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

  open(content) {


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.workoutPlanService.copyWorkoutPlanToMyWorkoutPlans(this.workoutPlanId).subscribe((workoutPlan: WorkoutPlan) => {
        this.router.navigate(['my-workout-plans/', workoutPlan.id])
      });
    }, (reason) => {
    });
  }

  exportToExcelHandler() {

    this.workoutPlanService.exportWorkoutPlanToExcel(this.workoutPlanId).subscribe( (blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.download = this.workoutPlan.name.replace(/\s+/g, '-').toLowerCase() + '.xlsx';
      anchor.href = url;
      anchor.click();

    })
  }

  onLikeHandler() {
    this.workoutPlanService.likeWorkoutPlan(this.workoutPlan.id).subscribe((workoutPlan: WorkoutPlan) => {
      this.workoutPlan = workoutPlan;
    });
  }

  onPostHandler() {


    this.commentService.commentWorkoutPlan(this.workoutPlan.id, this.commentBindingModel).subscribe((comment: CommentModel) => {
      this.commentBindingModel = new CommentBindingModel();
      this.workoutPlanComments.push(comment);
    });
  }

  onDeleteCommentHandler(id: string) {

    this.commentService.deleteWorkoutPlanComment(id).subscribe(() => {
      this.fetchWorkoutPlanDetails();
    })

  }

}
