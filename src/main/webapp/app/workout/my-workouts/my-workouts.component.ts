import {Component, OnInit} from '@angular/core';
import {Workout} from "../workout.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WorkoutBindingModel} from "../workout-binding-model";
import {WorkoutService} from "../workout.service";
import {UserService} from "../../user/user.service";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, NavigationEnd, Params, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.css']
})
export class MyWorkoutsComponent implements OnInit {

  workouts: Workout[];
  selectedWorkoutId: string;
  workoutBindingModel: WorkoutBindingModel;
  loggedUserId: string;

  constructor(private modalService: NgbModal, private workoutService: WorkoutService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.fetchWorkouts();
    });

    this.setSelectedWorkoutIdFromParams();
    this.fetchWorkouts();
    this.workoutBindingModel = new WorkoutBindingModel();
  }

  fetchWorkouts() {
    this.workoutService.getLoggedInUserWorkouts().subscribe((workouts: Workout[]) => {
      workouts.sort((w1, w2) => w1.name.localeCompare(w2.name));
      this.workouts = workouts;
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.workoutService.createWorkout(this.workoutBindingModel)
        .subscribe((workout: Workout) => {
          this.fetchWorkouts();
          this.router.navigate(['my-workouts/' + workout.id])
        });
      this.workoutBindingModel = new WorkoutBindingModel();
    }, (reason) => {
    });
  }

  setSelectedWorkoutIdFromParams() {
    this.route.firstChild.params.subscribe((params: Params) => {
      this.selectedWorkoutId = params['id'] ? params['id'] : undefined;
    });
  }

  onWorkoutButtonClick(workoutId: string) {
    this.selectedWorkoutId = workoutId;
    this.router.navigate([workoutId], {relativeTo: this.route})
  }

  onRouterOutletDeactivate() {
    this.fetchWorkouts();
  }

  onRouterOutletActivate() {
    this.setSelectedWorkoutIdFromParams();
    this.fetchWorkouts();
  }
}
