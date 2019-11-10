import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {UserModel} from '../../user/user.model';
import {FitnessProfileModel} from '../../user/fitness-profile.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  loggedUser: UserModel;
  loggedUserFitnessProfile: FitnessProfileModel;
  loggedUserFirstName: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getLoggedInUserObservable().subscribe(user => {
      console.log(user);
      if (user) {
        this.loggedUser = user;
        this.loggedUserFirstName = user.firstName;
        this.loggedUserFitnessProfile = user.fitnessProfile;
      }
    });
  }

}
