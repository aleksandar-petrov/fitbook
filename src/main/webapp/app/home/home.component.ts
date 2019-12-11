import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hasFitnessProfile: boolean;
  loading: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit() {

    this.loading = true;
    this.userService.getLoggedInUserObservable().subscribe(user => {


      if (user) {
        this.hasFitnessProfile = !!user.fitnessProfile;
        this.loading = false;
      }
    });

  }

}
