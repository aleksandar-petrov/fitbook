import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {UserAuthModel} from "../../auth/user-auth.model";
import {ActivatedRoute, NavigationStart, Router, UrlSegment} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
    selector: 'app-logged-navbar',
    templateUrl: './logged-navbar.component.html',
    styleUrls: ['./logged-navbar.component.css', '../navbar.component.css']
})
export class LoggedNavbarComponent implements OnInit {
    private userRole: string;

    isInDiets: boolean;
    isInWorkouts: boolean;
    isExploring: boolean;

    constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    }

    profilePictureUrl = '';

    ngOnInit() {

        this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event: NavigationStart) =>{

             const url = event.url;

            if (url.startsWith('/my-diet-plans') || url.startsWith('/my-meals')) {

                this.isInDiets = true;
                this.isInWorkouts = false;
                this.isExploring = false;

            } else if (url.startsWith('/my-workout-plans') || url.startsWith('/my-workouts')) {

                this.isInDiets = false;
                this.isInWorkouts = true;
                this.isExploring = false;

            } else if (url.startsWith('/foods/all') || url.startsWith('/meals') ||
                url.startsWith('/diet-plans') || url.startsWith('/exercises/all') ||
                url.startsWith('/workouts') || url.startsWith('/workout-plans')) {

                this.isInDiets = false;
                this.isInWorkouts = false;
                this.isExploring = true;

            } else {
                this.isInDiets = false;
                this.isInWorkouts = false;
                this.isExploring = false;
            }


        });

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
        this.userService.loggedUser.next(null);
    }
}
