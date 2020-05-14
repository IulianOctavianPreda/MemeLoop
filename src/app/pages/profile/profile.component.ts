import { Component, OnInit } from "@angular/core";
import { UserApiService } from "src/app/api/apis/users.api";

import { ThemeNames } from "../../shared/enums/theme-variables";
import { ThemeService } from "../../shared/services/theme.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
    user;
    theme = ThemeNames;
    oldUsername;

    constructor(private themeService: ThemeService, private userService: UserApiService) {}

    changeTheme(name: string) {
        this.themeService.setTheme(name);
    }
    ngOnInit() {
        this.user = this.userService.getLoggedInUser();
        this.oldUsername = this.user.name;
    }

    updateUser() {
        if (!!this.user && !!this.user.name && !!this.user.password) {
            this.userService.updateUser(this.oldUsername, this.user.name, this.user.password);
        }
    }
}
