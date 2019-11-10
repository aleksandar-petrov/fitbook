import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../user/user.model';
import {UserService} from '../user/user.service';
import has = Reflect.has;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hasFitnessProfile: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getLoggedInUserObservable().subscribe(user => {

      console.log("laina");

      if (user) {
        this.hasFitnessProfile = !!user.fitnessProfile;
      }
    });

  }

}
