import { Component, OnInit } from "@angular/core";

import { ThemeNames } from "../../shared/enums/theme-variables";
import { ThemeService } from "../../shared/services/theme.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
    user = {
        username: "MyUser",
        email: "myUser@emai.com",
    };
    theme = ThemeNames;

    constructor(private themeService: ThemeService) {}

    changeTheme(name: string) {
        this.themeService.setTheme(name);
    }
    ngOnInit() {}
}
