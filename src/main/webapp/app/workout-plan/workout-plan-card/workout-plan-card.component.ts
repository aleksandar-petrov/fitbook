import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkoutPlan} from "../workout-plan.model";

@Component({
    selector: 'app-workout-plan-card',
    templateUrl: './workout-plan-card.component.html',
    styleUrls: ['./workout-plan-card.component.css']
})
export class WorkoutPlanCardComponent implements OnInit {

    @Input() workoutPlan: WorkoutPlan;
    @Output() modalOpen: EventEmitter<any> = new EventEmitter();

    setCounter = {
        biceps: 0,
        triceps: 0,
        forearm: 0,
        latisimus: 0,
        erectors: 0,
        traps: 0,
        chest: 0,
        anteriorDeltoid: 0,
        lateralDeltoid: 0,
        posteriorDeltoid: 0,
        hamstrings: 0,
        gluteus: 0,
        calves: 0,
        quadriceps: 0,
        abs: 0,
    };
    focusedMuscleGroup: string;

    constructor() {
    }

    ngOnInit() {
        this.calculateSetsPerMuscleGroup();
    }

    onMuscleMouseEnter(muscleType: string) {
        this.focusedMuscleGroup = muscleType;
    }

    resetSelectedMuscleGroup() {
        this.focusedMuscleGroup = undefined;
    }

    copyToMyWorkoutPlansHandler(id: string) {
        this.modalOpen.emit(id);
    }

    calculateSetsPerMuscleGroup() {
        for (const workout of this.workoutPlan.workouts) {
            const workoutExercises = workout.workout.exercises;
            workoutExercises.forEach(e => {

                this.setCounter[e.exercise.majorMuscleGroup] += e.sets;

                e.exercise.assistingMuscleGroups.forEach(a => {

                    this.setCounter[a] += e.sets * 0.5;
                });
            });
        }
    }


}
