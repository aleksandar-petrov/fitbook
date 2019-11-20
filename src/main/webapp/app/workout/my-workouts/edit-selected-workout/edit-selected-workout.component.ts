import { Component, OnInit } from '@angular/core';
import {Workout} from "../../workout.model";
import {WorkoutService} from "../../workout.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-selected-workout',
  templateUrl: './edit-selected-workout.component.html',
  styleUrls: ['./edit-selected-workout.component.css']
})
export class EditSelectedWorkoutComponent implements OnInit {

  selectedWorkout: Workout;
  workoutId: string;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.selectedWorkout = new Workout();

    this.route.params.subscribe((params: Params) => {

          this.workoutId = params['id'];
          this.fetchWorkoutDetails();
        }
    )
  }

  fetchWorkoutDetails(): void {
    this.workoutService.getLoggedInUserWorkouts().subscribe((workouts: Workout[]) => {
      if (workouts) {
        this.selectedWorkout = workouts.find(w => w.id === this.workoutId);

        this.selectedWorkout
            .exercises
            .sort((e1, e2) => e1.orderIndex - e2.orderIndex);

      }
    });
  }

  onWorkoutExerciseDeleteHandler(workoutId: string, exerciseId: string) {
    this.workoutService.deleteWorkoutExerciseFromWorkout(workoutId, exerciseId).subscribe((workout: Workout) => {
      this.selectedWorkout = workout;
    })
  }

}
