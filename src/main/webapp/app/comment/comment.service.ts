import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CommentModel} from './comment.model'
import {CommentBindingModel} from "./comment-binding.model";


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

        return this.http.post(`${CONSTANTS.DOMAIN}/api/workouts/comment/` + workoutId, comment, {headers: this.contentTypeJsonHeaders});

    }

    deleteWorkoutComment(commentId: string) {

        return this.http.delete(`${CONSTANTS.DOMAIN}/api/workouts/comment/delete/` + commentId, );
    }









}
