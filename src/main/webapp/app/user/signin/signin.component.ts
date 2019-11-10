import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {SigninBindingModel} from './signin-binding.model';
import {HttpResponse} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInBindingModel: SigninBindingModel;
  rememberMe = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signInBindingModel = new SigninBindingModel();
  }

  onSubmit() {

    this.authService.signin(this.signInBindingModel).subscribe(data => {
      this.authService.handleAuthentication(data.headers.get('Authorization'), this.rememberMe);
      this.router.navigate(['/home']);
    });
  }

}
