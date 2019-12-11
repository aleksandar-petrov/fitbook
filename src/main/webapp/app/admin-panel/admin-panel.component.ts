import {Component, OnInit} from '@angular/core';
import {AdminService} from "./admin.service";
import {AllUserModel} from "./all-user.model";
import {AuthService} from "../auth/auth.service";
import {UserAuthModel} from "../auth/user-auth.model";

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    loading: boolean;

    users: AllUserModel[];
    loggedUserRole: string;

    page: number = 1;
    pageSize: number = 6;

    constructor(private adminService: AdminService, private authService: AuthService) {
    }

    ngOnInit() {

        this.loading = true;

        this.adminService.fetchAllUsers().subscribe((users: AllUserModel[]) => {
            this.users = users;
            this.loading = false;
        });

        this.authService.user.subscribe((user: UserAuthModel) => {
            this.loggedUserRole = user.role;
        });

    }

    onPromoteHandler(userId: string) {

        this.loading = true;

        this.adminService.promoteUser(userId)
            .subscribe(data => {
                this.adminService.fetchAllUsers().subscribe((users: AllUserModel[]) => {
                    this.users = users;
                    this.loading = false;
                });
            })

    }

    onDemoteHandler(userId: string) {

        this.loading = true;

        this.adminService.demoteUser(userId)
            .subscribe(data => {
                this.adminService.fetchAllUsers().subscribe((users: AllUserModel[]) => {
                    this.users = users;
                    this.loading = false;
                });
            })

    }
}
