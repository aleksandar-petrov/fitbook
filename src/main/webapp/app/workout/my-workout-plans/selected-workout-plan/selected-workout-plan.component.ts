import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Workout} from "../../workout.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WorkoutService} from "../../workout.service";
import {GetConstantViewNamePipe} from "../../../get-constant-view-name.pipe";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {moveItemInArray} from "@angular/cdk/drag-drop";
import {WorkoutPlan} from "../../workout-plan.model";
import {WorkoutPlanService} from "../../workout-plan.service";

@Component({
    selector: 'app-selected-workout-plan',
    templateUrl: './selected-workout-plan.component.html',
    styleUrls: ['./selected-workout-plan.component.css']
})
export class SelectedWorkoutPlanComponent implements OnInit {

    @Output() workoutDelete: EventEmitter<any> = new EventEmitter();

    selectedWorkoutPlan: WorkoutPlan;
    editWorkoutPlanBindingModel: WorkoutPlan;
    deletedWorkoutsStack: string[];
    workoutPlanId: string;
    loggedUserWorkouts: Workout[];

    editMode = false;
    muscleGroupSets: any[];
    customColors: any[];
    selectedWorkoutForModal: Workout;
    selectedWorkoutIdForModal: string;


    constructor(private route: ActivatedRoute,
                private workoutPlanService: WorkoutPlanService,
                private workoutService: WorkoutService,
                private router: Router,
                private constantViewPipe: GetConstantViewNamePipe,
                private modalService: NgbModal) {
    }

    ngOnInit() {

        this.selectedWorkoutPlan = new WorkoutPlan();
        this.selectedWorkoutForModal = new Workout();

        this.route.params.subscribe((params: Params) => {
                this.workoutPlanId = params['id'];
                this.fetchWorkoutPlanDetails();
            }
        );

        this.workoutService.getLoggedInUserWorkouts().subscribe((workouts: Workout[]) => {

            if (workouts) {
                this.loggedUserWorkouts = workouts;
                this.selectedWorkoutForModal = workouts[0];
                this.selectedWorkoutIdForModal = workouts[0].id;
            }

        });

        this.route.queryParams.subscribe((queryParams: Params) => {

            if (queryParams['edit']) {
                this.editMode = queryParams['edit'] === '1';
                if (this.editMode) {
                    this.editWorkoutPlanBindingModel = JSON.parse(JSON.stringify(this.selectedWorkoutPlan));
                    this.editWorkoutPlanBindingModel.isPublic = this.selectedWorkoutPlan.isPublic;
                    this.deletedWorkoutsStack = [];
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

    openAddWorkoutModal(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {

            this.workoutPlanService.addWorkoutFromMyWorkoutsToMyWorkoutPlan(this.workoutPlanId, this.selectedWorkoutIdForModal)
                .subscribe((workoutPlan: WorkoutPlan) => {
                    if (workoutPlan) {
                        this.selectedWorkoutPlan = workoutPlan;
                        this.calculateExercisesSets();
                    }
                });

        }, (reason) => {
        });
    }

    fetchWorkoutPlanDetails(): void {
        this.workoutPlanService.getLoggedInUserWorkoutPlans().subscribe((workoutPlans: WorkoutPlan[]) => {
            if (workoutPlans) {
                this.selectedWorkoutPlan = workoutPlans.find(w => w.id === this.workoutPlanId);

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

        for (const workout of this.selectedWorkoutPlan.workouts) {
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


        this.muscleGroupSets = exerciseSetsArray;
        this.customColors = muscleGroupColorsArray;

    }

    onWorkoutDeleteHandler(workoutId: string, orderIndex: number) {
        this.editWorkoutPlanBindingModel.workouts =
            this.editWorkoutPlanBindingModel.workouts.filter(w => w.orderIndex !== orderIndex || w.id !== workoutId);
        this.rearrangeOrderIndexes();
    }

    deleteWorkoutExercise(workoutPlanId: string, workoutId: string) {
        // this.workoutPlanService.deleteWorkoutFromMyWorkoutPlan(workoutPlanId, workoutId).subscribe((workoutPlan: WorkoutPlan) => {
        //   this.selectedWorkoutPlan = workoutPlan;
        // })
    }

    onSaveHandler() {

        this.workoutPlanService.editMyWorkoutPlan(this.workoutPlanId, this.editWorkoutPlanBindingModel).subscribe((workoutPlan: WorkoutPlan) => {
            this.selectedWorkoutPlan = workoutPlan;
            this.calculateExercisesSets();
        });

        this.router.navigate(['./'], {relativeTo: this.route})
    }

    onWorkoutPlanDeleteHandler() {

        this.workoutPlanService.deleteMyWorkoutPlan(this.workoutPlanId).subscribe(result => {
            if (result) {
                this.router.navigate(['/my-workout-plans']);
            }
        });

    }

    onDrop(event: any) {
        moveItemInArray(this.editWorkoutPlanBindingModel.workouts, event.previousIndex, event.currentIndex);
        this.rearrangeOrderIndexes();
    }

    rearrangeOrderIndexes() {
        const workouts = this.editWorkoutPlanBindingModel.workouts;

        for (let i = 0; i < workouts.length; i++) {
            workouts[i].orderIndex = i + 1;
        }
    }

    onAddWorkoutHandler() {

    }

    setSelectedWorkoutForModal() {
        this.selectedWorkoutForModal = this.loggedUserWorkouts.filter(w => w.id === this.selectedWorkoutIdForModal)[0];
    }
}
