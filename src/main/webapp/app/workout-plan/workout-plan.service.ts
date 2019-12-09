import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {WorkoutPlanBindingModel} from "./workout-plan-binding-model";
import {WorkoutPlan} from "./workout-plan.model";
import {AppSettings} from "../app-settings";


@Injectable({
    providedIn: 'root',
})
export class WorkoutPlanService {


    constructor(private http: HttpClient) {

    }

    createWorkoutPlan(workoutPlanBindingModel: WorkoutPlanBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workout-plans/create`, workoutPlanBindingModel);

    }

    getLoggedInUserWorkoutPlans() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workout-plans/my`);

    }


    deleteMyWorkoutPlan(workoutPlanId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/workout-plans/delete/` + workoutPlanId);

    }

    editMyWorkoutPlan(workoutPlanId: string, workoutPlanEditBindingModel: WorkoutPlan) {

        return this.http.put(`${AppSettings.API_ENDPOINT}/api/workout-plans/edit/` + workoutPlanId, workoutPlanEditBindingModel);

    }

    getAllPublicWorkoutPlans() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workout-plans/public/all`);

    }

    getWorkoutPlanById(workoutPlanId: string) {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workout-plans/` + workoutPlanId);

    }

    copyWorkoutPlanToMyWorkoutPlans(workoutPlanId: string) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workout-plans/copy/` + workoutPlanId, null);
    }

    addWorkoutFromMyWorkoutsToMyWorkoutPlan(workoutPlanId: string, workoutId: string) {

        const params = new HttpParams().append('workoutId', workoutId);

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workout-plans/add-workout/` + workoutPlanId, null, {params: params});

    }

    exportWorkoutPlanToExcel(workoutPlanId: string) {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/workout-plans/export/excel/` + workoutPlanId, {responseType: "blob"});
    }

}
