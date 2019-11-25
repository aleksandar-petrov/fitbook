import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {WorkoutBindingModel} from './workout-binding-model';
import {WorkoutExerciseBindingModel} from '../exercise/all-exercises/workout-exercise-binding.model';
import {Workout} from "./workout.model";
import {WorkoutPlanBindingModel} from "./workout-plan-binding-model";
import {WorkoutPlan} from "./workout-plan.model";


@Injectable({
    providedIn: 'root',
})
export class WorkoutPlanService {


    constructor(private http: HttpClient) {

    }

    createWorkoutPlan(workoutPlanBindingModel: WorkoutPlanBindingModel) {

        return this.http.post('http://localhost:8000/workout-plans/create', workoutPlanBindingModel);

    }

    getLoggedInUserWorkoutPlans() {

        return this.http.get('http://localhost:8000/workout-plans/my');

    }


    deleteMyWorkoutPlan(workoutPlanId: string) {

        return this.http.delete('http://localhost:8000/workout-plans/delete/' + workoutPlanId);

    }

    editMyWorkoutPlan(workoutPlanId: string, workoutPlanEditBindingModel: WorkoutPlan) {

        return this.http.put('http://localhost:8000/workout-plans/edit/' + workoutPlanId, workoutPlanEditBindingModel);

    }

    getAllPublicWorkoutPlans() {

        return this.http.get('http://localhost:8000/workout-plans/public/all');

    }

    getWorkoutPlanById(workoutPlanId: string) {

        return this.http.get('http://localhost:8000/workout-plans/' + workoutPlanId);

    }

    copyWorkoutPlanToMyWorkoutPlans(workoutPlanId: string) {

        return this.http.post('http://localhost:8000/workout-plans/copy/' + workoutPlanId, null);
    }

    addWorkoutFromMyWorkoutsToMyWorkoutPlan(workoutPlanId: string, workoutId: string) {

        const params = new HttpParams().append('workoutId', workoutId);

        return this.http.post('http://localhost:8000/workout-plans/add-workout/' + workoutPlanId, null, {params: params});

    }

}
