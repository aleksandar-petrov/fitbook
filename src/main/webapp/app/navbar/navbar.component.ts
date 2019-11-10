import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn = false;
  userRole: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isUserLoggedIn = !!user;
      this.userRole = user ? user.role : undefined;
    });
  }

}
