import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserApiService } from "src/app/api/apis/users.api";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    toggle = false;
    username;
    password;
    loggedIn;

    constructor(public modalCtrl: ModalController, private userService: UserApiService) {}

    ngOnInit() {}

    login() {
        if (!!this.username && !!this.password) {
            if (this.toggle) {
                this.userService.signUp(this.username, this.password);
                this.modalCtrl.dismiss();
            } else {
                this.loggedIn = this.userService.logIn(this.username, this.password);
                if (this.loggedIn) {
                    this.modalCtrl.dismiss();
                }
            }
        }
    }
}
