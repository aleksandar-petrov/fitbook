import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {FitnessProfileBindingModel} from './fitness-profile-binding.model';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-create-fitness-profile',
  templateUrl: './create-fitness-profile.component.html',
  styleUrls: ['./create-fitness-profile.component.css']
})
export class CreateFitnessProfileComponent implements OnInit {

  loading: boolean;

  userGender: string;
  userFirstName: string;
  fitnessProfileBindingModel: FitnessProfileBindingModel;


  constructor(private userService: UserService, private titleService: Title) {
  }

  ngOnInit() {

    this.titleService.setTitle( 'FitBook' + '- Create Fitness Profile' );

    this.fitnessProfileBindingModel = new FitnessProfileBindingModel();

    this.userService.getLoggedInUserObservable().subscribe(user => {
      if (user) {
        this.userGender = user.gender;
        this.userFirstName = user.firstName;
      }
    });
  }

  onWeightGoalChange(eventTarget: any) {

    if (eventTarget.value === 'maintainWeight' || eventTarget.value === '') {
      this.fitnessProfileBindingModel.weightChangeRate = '';
    }
  }

  onSubmit() {

    this.loading = true;

    this.userService.setFitnessProfileToLoggedInUser(this.fitnessProfileBindingModel).subscribe(data => {
      if (data) {
        this.userService.loadLoggedUser();
        this.loading = false;
      }
    });
  }
}
