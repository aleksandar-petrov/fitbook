import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {UserModel} from './user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {FitnessProfileBindingModel} from '../home/create-fitness-profile/fitness-profile-binding.model';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {

  loggedUser = new BehaviorSubject<UserModel>(null);
  loggedUserId: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadLoggedUser();
  }

  ngOnInit(): void {
  }

  clearUser(): void {
  }

  getLoggedInUserObservable(): Observable<UserModel> {
    return this.loggedUser;
  }

  getUserById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${CONSTANTS.DOMAIN}/api/users/id/` + id);
  }

  getUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${CONSTANTS.DOMAIN}/api/users/username/` + username);
  }

  setFitnessProfileToLoggedInUser(fitnessProfileBindingModel: FitnessProfileBindingModel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${CONSTANTS.DOMAIN}/api/users/fitness-profile/set/` + this.loggedUserId,
      fitnessProfileBindingModel, {headers: headers, observe: 'response'});

  }

  updateFitnessProfileOnLoggedInUser(fitnessProfileBindingModel: FitnessProfileBindingModel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(`${CONSTANTS.DOMAIN}/api/users/fitness-profile/edit/` + this.loggedUserId,
      fitnessProfileBindingModel, {headers: headers, observe: 'response'});
  }

  loadLoggedUser() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.loggedUserId = user.userId;
        this.getUserById(user.userId).subscribe(data => {
          this.loggedUser.next(data);
          this.setFitnessProfileInLocalStorage(!!data.fitnessProfile);
        });
      }
    });
  }

  setFitnessProfileInLocalStorage(boolean: boolean): void {
    localStorage.setItem('fp', String(boolean));
  }

  getLoggedUserFitnessProfileCondition(): boolean {
    return localStorage.getItem('fp') == 'true';
  }
}
