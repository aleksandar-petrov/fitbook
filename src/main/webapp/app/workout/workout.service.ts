import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {WorkoutBindingModel} from './workout-binding-model';
import {WorkoutExerciseBindingModel} from '../exercise/all-exercises/workout-exercise-binding.model';
import {Workout} from "./workout.model";
import {AppSettings} from "../app-settings";


@Injectable({
    providedIn: 'root',
})
export class WorkoutService {


    constructor(private http: HttpClient) {

    }

    createWorkout(workoutCreateModel: WorkoutBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workouts/create`, workoutCreateModel);
    }

    addWorkoutExerciseToWorkout(workoutExerciseBindingModel: WorkoutExerciseBindingModel, workoutId: string) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workouts/add-exercise/` + workoutId, workoutExerciseBindingModel);
    }


    fetchAllPublicWorkouts() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workouts/public/all`);
    }

    fetchWorkoutById(id: string) {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workouts/` + id);
    }

    getLoggedInUserWorkouts() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workouts/my/`);
    }


    deleteWorkoutExerciseFromWorkout(workoutId: string, exerciseId: string) {

        const params = new HttpParams().append('exerciseId', exerciseId);
        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/workouts/delete-exercise/` + workoutId, {params: params});
    }

    deleteWorkoutById(workoutId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/workouts/delete/` + workoutId);
    }

    editWorkoutById(workoutId: string, workoutBindingModel: Workout) {

        return this.http.put(`${AppSettings.API_ENDPOINT}/api/workouts/edit/` + workoutId, workoutBindingModel);
    }

    copyWorkoutToLoggedUserWorkouts(workoutId: string) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workouts/copy/` + workoutId, null);
    }

    likeWorkout(workoutId: string) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workouts/like/` + workoutId, null);
    }

}
