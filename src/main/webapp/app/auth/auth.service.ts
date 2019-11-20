import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, exhaustMap, take, tap} from 'rxjs/operators';
import {throwError, BehaviorSubject} from 'rxjs';

import {UserAuthModel} from './user-auth.model';
import {SigninBindingModel} from '../user/signin/signin-binding.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<UserAuthModel>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  register(formData: FormData) {

    return this.http.post("http://localhost:8000/users/register", formData);
  }

  signin(signinBindingModel: SigninBindingModel) {

    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });

    return this.http.post("http://localhost:8000/users/signin", signinBindingModel, {headers: headers, observe: "response"});
  }


  autoLogin() {
    const userData: {
      userId: string,
      role: string,
      rememberMe: boolean,
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    if (!userData.rememberMe) {
        this.logout();
        return;
    }

    const loadedUser = new UserAuthModel(
      userData.userId,
      userData.role,
      userData.rememberMe,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();

      if (new Date(userData._tokenExpirationDate) < new Date()) {
        this.logout();
        return;
      }

      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }


  public handleAuthentication(token: string, rememberMe: boolean) {


    const payload = JSON.parse(atob((token.replace('Bearer: ', '').split('.')[1])));
    const firstName = payload.firstName;
    const userId = payload.userId;
    const userRole = payload.role;
    const tokenExpiresInMS = payload.exp;
    const pictureUrl = payload.profilePictureUrl;

    const expirationDate = new Date(new Date().getTime() + tokenExpiresInMS);


    const user = new UserAuthModel(userId, userRole, rememberMe, token, expirationDate);
    this.user.next(user);
    this.autoLogout(tokenExpiresInMS);
    localStorage.setItem('userData', JSON.stringify(user));
  }


  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occurred!';
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage);
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email exists already';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email does not exist.';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'This password is not correct.';
  //       break;
  //   }
  //   return throwError(errorMessage);
  // }
}
