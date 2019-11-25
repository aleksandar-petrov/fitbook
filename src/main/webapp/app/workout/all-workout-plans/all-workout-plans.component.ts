import { Component, OnInit } from '@angular/core';
import {Workout} from "../workout.model";
import {WorkoutService} from "../workout.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {WorkoutPlan} from "../workout-plan.model";
import {WorkoutPlanService} from "../workout-plan.service";

@Component({
  selector: 'app-all-workout-plans',
  templateUrl: './all-workout-plans.component.html',
  styleUrls: ['./all-workout-plans.component.css']
})
export class AllWorkoutPlansComponent implements OnInit {

  workoutPlans: WorkoutPlan[];
  filteredWorkoutPlans: WorkoutPlan[];
  page: number = 1;
  pageSize: number = 6;

  selectedWorkoutPlanId: string;
  selectedWorkoutPlanForModal: WorkoutPlan;

  constructor(private workoutPlanService: WorkoutPlanService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {

    this.workoutPlanService.getAllPublicWorkoutPlans().subscribe((workoutPlans: WorkoutPlan[]) => {
      if (workoutPlans) {
        this.workoutPlans = workoutPlans;
        this.filteredWorkoutPlans = [...workoutPlans];
      }
    });


  }

  open(content, workoutPlanId) {

    this.selectedWorkoutPlanForModal = this.workoutPlans.find(e => e.id === workoutPlanId);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.workoutPlanService.copyWorkoutPlanToMyWorkoutPlans(workoutPlanId).subscribe((workoutPlan : WorkoutPlan) => {
        this.router.navigate(['my-workout-plans', workoutPlan.id])
      });
    }, (reason) => {
    });
  }

}
