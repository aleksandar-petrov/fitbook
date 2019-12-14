import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../user.service";
import {UserModel} from "../user.model";
import {FitnessProfileModel} from "../fitness-profile.model";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    username: string;
    user: UserModel;
    userFitnessProfile: FitnessProfileModel;
    macroNutrientsData: ({ name: string; value: any } | { name: string; value: any } | { name: string; value: any })[];

    constructor(private route: ActivatedRoute, private userService: UserService, private titleService: Title) {
    }

    ngOnInit() {

        this.titleService.setTitle( 'FitBook' + '- User Profile' );

        this.route.params.subscribe((params: Params) => {
            if (params['username']) {
                this.username = params['username'];
                this.userService.getUserByUsername(this.username).subscribe((user: UserModel) => {
                  this.user = user;
                  this.userFitnessProfile = user.fitnessProfile;
                  console.log(user.fitnessProfile);

                  this.makeChartDataForMacroNutrients();
                })
            }
        })
    }

    makeChartDataForMacroNutrients() {
        this.macroNutrientsData = [
            {
                "name": "Protein",
                "value": this.userFitnessProfile.nutritionGoal.gramsOfProtein
            },
            {
                "name": "Carbohydrates",
                "value": this.userFitnessProfile.nutritionGoal.gramsOfCarbohydrates
            },
            {
                "name": "Fats",
                "value": this.userFitnessProfile.nutritionGoal.gramsOfFats
            },
        ]
    }

}
