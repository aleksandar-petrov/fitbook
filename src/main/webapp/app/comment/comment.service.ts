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









}
