import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.css', '../navbar.component.css']
})
export class LoggedNavbarComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) {
  }

  profilePictureUrl = '';

  ngOnInit() {

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
