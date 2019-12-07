import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Exercise} from "../../exercise/exercise.model";
import {Workout} from "../workout.model";
import {WorkoutService} from "../workout.service";

@Component({
    selector: 'app-workout-card',
    templateUrl: './workout-card.component.html',
    styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent implements OnInit {

    @Input() workout: Workout;
    @Output() modalOpen: EventEmitter<any> = new EventEmitter();

    constructor(private workoutService: WorkoutService) {
    }

    ngOnInit() {
    }

    copyToMyWorkoutsHandler(id: string) {
        this.modalOpen.emit(id);
    }

    onLikeHandler() {
        this.workoutService.likeWorkout(this.workout.id).subscribe((workout: Workout) => {
            this.workout = workout;
        });
    }

}
