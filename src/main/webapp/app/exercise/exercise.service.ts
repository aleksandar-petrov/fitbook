import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Exercise} from './exercise.model';
import {AppSettings} from "../app-settings";

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

    return this.http.post(`${AppSettings.API_ENDPOINT}/api/exercises/create`, formData);
  }


  fetchAllExercises() {
    return this.http.get(`${AppSettings.API_ENDPOINT}/api/exercises/all`);
  }

  getExerciseById(exerciseId: string) {
    return this.http.get(`${AppSettings.API_ENDPOINT}/api/exercises/details/` + exerciseId);
  }

  getExercises() {
    return this._exercises;
  }

}
