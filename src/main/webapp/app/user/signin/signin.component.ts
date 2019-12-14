import {Component, OnInit} from '@angular/core';
import {SigninBindingModel} from './signin-binding.model';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    loading: boolean;

    signInBindingModel: SigninBindingModel;
    rememberMe = false;
    errorOccurred = false;

    constructor(private authService: AuthService, private router: Router, private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle( 'FitBook' + '- Sign In' );

        this.signInBindingModel = new SigninBindingModel();
    }

    onSubmit() {

        this.loading = true;

        this.authService.signin(this.signInBindingModel).subscribe(data => {
            this.authService.handleAuthentication(data.headers.get('Authorization'), this.rememberMe);
            this.loading = false;
            this.router.navigate(['/home']);
        }, (error: HttpErrorResponse) => {
            this.errorOccurred = true;
            this.loading = false;
        });
    }

}
