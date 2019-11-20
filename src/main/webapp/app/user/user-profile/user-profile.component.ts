import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../user.service";
import {UserModel} from "../user.model";
import {FitnessProfileModel} from "../fitness-profile.model";

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    username: string;
    user: UserModel;
    userFitnessProfile: FitnessProfileModel;

    constructor(private route: ActivatedRoute, private userService: UserService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params['username']) {
                this.username = params['username'];
                this.userService.getUserByUsername(this.username).subscribe((user: UserModel) => {
                  this.user = user;
                  this.userFitnessProfile = user.fitnessProfile;
                })
            }
        })



    }

}
