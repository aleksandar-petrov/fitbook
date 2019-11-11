import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {UserModel} from './user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {FitnessProfileBindingModel} from '../home/create-fitness-profile/fitness-profile-binding.model';


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
    return this.http.get<UserModel>('http://localhost:8000/users/id/' + id);
  }

  getUserByUsername(username: string): Observable<UserModel> {
    return this.http.get<UserModel>('http://localhost:8000/users/username/' + username);
  }

  setFitnessProfileToLoggedInUser(fitnessProfileBindingModel: FitnessProfileBindingModel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post('http://localhost:8000/users/fitness-profile/set/' + this.loggedUserId,
      fitnessProfileBindingModel, {headers: headers, observe: 'response'});

  }

  updateFitnessProfileOnLoggedInUser(fitnessProfileBindingModel: FitnessProfileBindingModel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put('http://localhost:8000/users/fitness-profile/edit/' + this.loggedUserId,
      fitnessProfileBindingModel, {headers: headers, observe: 'response'});
  }

  loadLoggedUser() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.loggedUserId = user.userId;
        this.getUserById(user.userId).subscribe(data => {
          console.log(data);
          this.loggedUser.next(data);
        });
      }
    });
  }
}
