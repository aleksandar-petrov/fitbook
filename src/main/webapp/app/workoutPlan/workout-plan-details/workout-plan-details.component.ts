import { Component, OnInit } from '@angular/core';
import {Workout} from "../../workout/workout.model";
import {WorkoutService} from "../../workout/workout.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GetConstantViewNamePipe} from "../../get-constant-view-name.pipe";
import {WorkoutPlan} from "../workout-plan.model";
import {WorkoutPlanService} from "../workout-plan.service";

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


  constructor(private workoutPlanService: WorkoutPlanService,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private router: Router,
              private constantViewPipe: GetConstantViewNamePipe) {
  }

  ngOnInit() {

    this.workoutPlan = new WorkoutPlan();

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

}
