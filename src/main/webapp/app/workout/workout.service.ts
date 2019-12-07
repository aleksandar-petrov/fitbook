import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {WorkoutBindingModel} from './workout-binding-model';
import {WorkoutExerciseBindingModel} from '../exercise/all-exercises/workout-exercise-binding.model';
import {Workout} from "./workout.model";


@Injectable({
    providedIn: 'root',
})
export class WorkoutService {


    constructor(private http: HttpClient) {

    }

    createWorkout(workoutCreateModel: WorkoutBindingModel) {

        return this.http.post('http://localhost:8000/api/workouts/create', workoutCreateModel);
    }

    addWorkoutExerciseToWorkout(workoutExerciseBindingModel: WorkoutExerciseBindingModel, workoutId: string) {

        return this.http.post('http://localhost:8000/api/workouts/add-exercise/' + workoutId, workoutExerciseBindingModel);
    }


    fetchAllPublicWorkouts() {

        return this.http.get('http://localhost:8000/api/workouts/public/all');
    }

    fetchWorkoutById(id: string) {

        return this.http.get('http://localhost:8000/api/workouts/' + id);
    }

    getLoggedInUserWorkouts() {

        return this.http.get('http://localhost:8000/api/workouts/my/');
    }


    deleteWorkoutExerciseFromWorkout(workoutId: string, exerciseId: string) {

        const params = new HttpParams().append('exerciseId', exerciseId);
        return this.http.delete('http://localhost:8000/api/workouts/delete-exercise/' + workoutId, {params: params});
    }

    deleteWorkoutById(workoutId: string) {

        return this.http.delete('http://localhost:8000/api/workouts/delete/' + workoutId);
    }

    editWorkoutById(workoutId: string, workoutBindingModel: Workout) {

        return this.http.put('http://localhost:8000/api/workouts/edit/' + workoutId, workoutBindingModel);
    }

    copyWorkoutToLoggedUserWorkouts(workoutId: string) {

        return this.http.post('http://localhost:8000/api/workouts/copy/' + workoutId, null);
    }

    likeWorkout(workoutId: string) {

        return this.http.post('http://localhost:8000/api/workouts/like/' + workoutId, null);
    }

}
