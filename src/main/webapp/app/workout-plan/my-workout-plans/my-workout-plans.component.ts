import {Component, OnInit} from '@angular/core';
import {WorkoutPlanBindingModel} from "../workout-plan-binding-model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, NavigationEnd, Params, Router, RouterEvent} from "@angular/router";
import {WorkoutPlanService} from "../workout-plan.service";
import {WorkoutPlan} from "../workout-plan.model";
import {filter} from "rxjs/operators";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-my-workout-plans',
    templateUrl: './my-workout-plans.component.html',
    styleUrls: ['./my-workout-plans.component.css']
})
export class MyWorkoutPlansComponent implements OnInit {

    workoutPlans: WorkoutPlan[];
    selectedWorkoutPlanId: string;
    workoutPlanBindingModel: WorkoutPlanBindingModel;
    loggedUserId: string;

    constructor(private modalService: NgbModal,
                private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute,
                private workoutPlanService: WorkoutPlanService, private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle( 'FitBook' + '- My Workout Plans' );

        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.fetchWorkoutsPlans();
        });

        this.setSelectedWorkoutPlanIdFromParams();
        this.fetchWorkoutsPlans();
        this.workoutPlanBindingModel = new WorkoutPlanBindingModel();
    }

    setSelectedWorkoutPlanIdFromParams() {
        this.route.firstChild.params.subscribe((params: Params) => {
            this.selectedWorkoutPlanId = params['id'] ? params['id'] : undefined;
        });
    }

    fetchWorkoutsPlans() {
        this.workoutPlanService.getLoggedInUserWorkoutPlans().subscribe((workoutPlans: WorkoutPlan[]) => {
            this.workoutPlans = workoutPlans;
        })
    }

    onWorkoutPlanButtonClick(id: string) {

        this.selectedWorkoutPlanId = id;
        this.router.navigate([id], {relativeTo: this.route});
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.workoutPlanService.createWorkoutPlan(this.workoutPlanBindingModel)
                .subscribe((workoutPlan: WorkoutPlan) => {
                    if (workoutPlan) {
                        this.fetchWorkoutsPlans();
                        this.router.navigate(['my-workout-plans/' + workoutPlan.id])
                    }
                });
            this.workoutPlanBindingModel = new WorkoutPlanBindingModel();
        }, (reason) => {
        });
    }

    onRouterOutletDeactivate() {
        this.fetchWorkoutsPlans();
    }

    onRouterOutletActivate() {
        this.setSelectedWorkoutPlanIdFromParams();
    }
}
