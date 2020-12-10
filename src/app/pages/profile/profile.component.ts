import { Component, OnInit } from '@angular/core';

import { ThemeNames } from '../../shared/enums/theme-variables';
import { ThemeService } from '../../shared/services/theme.service';
import { AuthService } from './../../api/apis/auth.api';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user;
    theme = ThemeNames;

    constructor(private themeService: ThemeService, private authService: AuthService) {}

    changeTheme(name: string) {
        this.themeService.setTheme(name);
    }
    ngOnInit() {
        this.user = this.authService.user$.value;
    }

    sendPasswordRecovery() {
        this.authService.sendPasswordResetEmail(this.user);
    }
}
