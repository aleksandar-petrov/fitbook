import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Exercise} from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  private _exercises: Exercise[] = [];
  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  createExercise(formData: FormData) {

    return this.http.post("http://localhost:8000/exercises/create", formData);
  }


  fetchAllExercises() {
    return this.http.get("http://localhost:8000/exercises/all");
  }

  getExerciseById(exerciseId: string) {
    return this.http.get("http://localhost:8000/exercises/details/" + exerciseId);
  }

  getExercises() {
    return this._exercises;
  }

}
