import { Component, OnInit } from "@angular/core";

import { ThemeNames } from "../enums/theme-variables";
import { ThemeService } from "../services/theme.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
    user = {
        username: "MyUser",
        email: "myUser@emai.com"
    };
    theme = ThemeNames;

    constructor(private themeService: ThemeService) {}

    changeTheme(name) {
        this.themeService.setTheme(name);
    }
    ngOnInit() {}
}
