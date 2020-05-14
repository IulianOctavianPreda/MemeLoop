import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserApiService } from "src/app/api/apis/users.api";

import { UserDetail } from "./../../api/types/user-detail";
import { LoginComponent } from "./../../shared/login/login.component";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
    @Input() contentId: string;

    isAuthenticated;
    user: UserDetail;
    appPages = [
        {
            url: "posts",
            icon: "smiley",
            title: "All Posts",
        },
        {
            url: "country",
            icon: "earth",
            title: "Maps",
        },
        {
            url: "about",
            icon: "about",
            title: "About",
        },
    ];

    public categories = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

    constructor(private userService: UserApiService, public modalController: ModalController) {
        this.user = this.userService.getLoggedInUser();
        if (this.user.name === "guest") {
            this.isAuthenticated = false;
        } else {
            this.isAuthenticated = true;
        }
    }

    ngOnInit() {}

    presentModal() {
        const modal = this.modalController.create({
            component: LoginComponent,
            swipeToClose: true,
            showBackdrop: true,
        });
        modal.then((x) => {
            x.present();
            x.onDidDismiss().then(() => {
                this.user = this.userService.getLoggedInUser();
                if (this.user.name === "guest") {
                    this.isAuthenticated = false;
                } else {
                    this.isAuthenticated = true;
                }
            });
        });
    }
}
