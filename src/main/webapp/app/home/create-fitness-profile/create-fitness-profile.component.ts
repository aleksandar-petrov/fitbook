import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../user/user.model';
import {UserService} from '../../user/user.service';
import {FitnessProfileModel} from '../../user/fitness-profile.model';
import {FitnessProfileBindingModel} from './fitness-profile-binding.model';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-create-fitness-profile',
  templateUrl: './create-fitness-profile.component.html',
  styleUrls: ['./create-fitness-profile.component.css']
})
export class CreateFitnessProfileComponent implements OnInit {

  userGender: string;
  userFirstName: string;
  fitnessProfileBindingModel: FitnessProfileBindingModel;


  constructor(private userService: UserService) {
  }

  ngOnInit() {

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

    this.userService.setFitnessProfileToLoggedInUser(this.fitnessProfileBindingModel).subscribe(data => {
      if (data) {
        this.userService.loadLoggedUser();
      }
    });
  }
}
