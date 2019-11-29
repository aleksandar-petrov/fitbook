import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {UserAuthModel} from "../../auth/user-auth.model";

@Component({
    selector: 'app-logged-navbar',
    templateUrl: './logged-navbar.component.html',
    styleUrls: ['./logged-navbar.component.css', '../navbar.component.css']
})
export class LoggedNavbarComponent implements OnInit {
    private userRole: string;

    constructor(private authService: AuthService, private userService: UserService) {
    }

    profilePictureUrl = '';

    ngOnInit() {

        this.authService.user.asObservable().subscribe((user: UserAuthModel) => {
            if (user) {
                this.userRole = user.role;
            }
        });


        this.userService.getLoggedInUserObservable().subscribe(user => {
            if (user) {
                this.profilePictureUrl = user.profilePictureURL;
            } else {
                this.profilePictureUrl = '';
            }
        });
    }

    onLogout() {
        this.authService.logout();
    }
}
