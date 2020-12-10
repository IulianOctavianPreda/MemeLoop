import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AuthService } from './../../api/apis/auth.api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    toggle = false;
    username;
    password;
    loggedIn;
    registrationMailSent = false;

    constructor(public modalCtrl: ModalController, private authService: AuthService) {}

    ngOnInit() {}

    async login() {
        if (!!this.username && !!this.password) {
            if (this.toggle) {
                await this.authService.register(this.username, this.password);
                this.registrationMailSent = true;
            } else {
                this.loggedIn = await this.authService.login(this.username, this.password);
                if (this.loggedIn) {
                    this.modalCtrl.dismiss();
                }
            }
        }
    }
}
