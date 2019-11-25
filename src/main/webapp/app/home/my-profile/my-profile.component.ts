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
  macroNutrientsData: any[];
  activeEntries: any[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {

    this.loggedUser = new UserModel();
    this.loggedUserFitnessProfile = new FitnessProfileModel();

    this.userService.getLoggedInUserObservable().subscribe(user => {
      console.log(user);
      if (user) {
        this.loggedUser = user;
        this.loggedUserFirstName = user.firstName;
        this.loggedUserFitnessProfile = user.fitnessProfile;
        this.makeChartDataForMacroNutrients();
      }
    });
  }

  makeChartDataForMacroNutrients() {
    this.macroNutrientsData = [
      {
        "name": "Protein",
        "value": this.loggedUserFitnessProfile.nutritionGoal.gramsOfProtein
      },
      {
        "name": "Carbohydrates",
        "value": this.loggedUserFitnessProfile.nutritionGoal.gramsOfCarbohydrates
      },
      {
        "name": "Fats",
        "value": this.loggedUserFitnessProfile.nutritionGoal.gramsOfFats
      },
    ]
  }

  onSelectHandler(event: any) {
    this.activeEntries.push(event);
  }
}
