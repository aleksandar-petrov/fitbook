import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommentBindingModel} from "./comment-binding.model";
import {AppSettings} from "../app-settings";


@Injectable({
    providedIn: 'root',
})
export class CommentService {

    contentTypeJsonHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    MONTH_NAMES = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    constructor(private http: HttpClient) {

    }

    commentWorkout(workoutId: string, comment: CommentBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workouts/comment/` + workoutId, comment, {headers: this.contentTypeJsonHeaders});

    }

    deleteWorkoutComment(commentId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/workouts/comment/delete/` + commentId, );
    }

    commentMeal(mealId: string, comment: CommentBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/meals/comment/` + mealId, comment, {headers: this.contentTypeJsonHeaders});

    }

    deleteMealComment(commentId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/meals/comment/delete/` + commentId, );
    }

    commentDietPlan(dietPlanId: string, comment: CommentBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/diet-plans/comment/` + dietPlanId, comment, {headers: this.contentTypeJsonHeaders});

    }

    deleteDietPlanComment(commentId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/diet-plans/comment/delete/` + commentId, );

    }

    commentWorkoutPlan(workoutPlanId: string, comment: CommentBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/workout-plans/comment/` + workoutPlanId, comment, {headers: this.contentTypeJsonHeaders});

    }

    deleteWorkoutPlanComment(commentId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/workout-plans/comment/delete/` + commentId, );

    }









}
