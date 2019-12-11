import {Component, OnInit} from '@angular/core';
import {FitnessProfileBindingModel} from "../create-fitness-profile/fitness-profile-binding.model";
import {UserService} from "../../user/user.service";
import {FitnessProfileModel} from "../../user/fitness-profile.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-fitness-profile',
  templateUrl: './edit-fitness-profile.component.html',
  styleUrls: ['./edit-fitness-profile.component.css']
})
export class EditFitnessProfileComponent implements OnInit {

  loading: boolean;

  userGender: string;
  fitnessProfileBindingModel: FitnessProfileBindingModel;
  currentFitnessProfile: FitnessProfileModel;
  private formChanged = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {

    this.fitnessProfileBindingModel = new FitnessProfileBindingModel();

    this.userService.getLoggedInUserObservable().subscribe(user => {
      if (user) {
        this.userGender = user.gender;
        this.fitnessProfileBindingModel.weight = user.fitnessProfile.weight;
        this.fitnessProfileBindingModel.height = user.fitnessProfile.height;
        this.fitnessProfileBindingModel.age = user.fitnessProfile.age;
        this.fitnessProfileBindingModel.activityLevel = user.fitnessProfile.activityLevel;
        this.fitnessProfileBindingModel.weightGoal = user.fitnessProfile.weightGoal;
        this.fitnessProfileBindingModel.weightChangeRate = user.fitnessProfile.weightChangeRate;
        this.fitnessProfileBindingModel.sportsExperience = user.fitnessProfile.sportsExperience;
      }
    });
  }

  onWeightGoalChange(eventTarget: any) {

    if (eventTarget.value === 'maintainWeight' || eventTarget.value === '') {
      this.fitnessProfileBindingModel.weightChangeRate = 'none';
    } else {
      this.fitnessProfileBindingModel.weightChangeRate = 'slow'
    }
  }

  onSubmit() {



    if (!this.formChanged) {
      this.router.navigate(['/home']);
    }

    this.loading = true;
    this.userService.updateFitnessProfileOnLoggedInUser(this.fitnessProfileBindingModel).subscribe(data => {
      if (data) {
        this.userService.loggedUser.next(null);
        this.userService.loadLoggedUser();
        this.router.navigate(['/home']);
      }
    });
  }

  onFormChange() {
    this.formChanged = true;
  }
}
