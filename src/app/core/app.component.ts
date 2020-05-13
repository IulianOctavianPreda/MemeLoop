import { Component, OnInit } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import { Platform } from "@ionic/angular";

import { ModalService } from "./../shared/services/modal.service";
import { NetworkService } from "./../shared/services/network.service";
import { NotificationService } from "./../shared/services/notification.service";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
    constructor(
        private networkService: NetworkService,
        private modalService: ModalService,
        private notificationService: NotificationService,
        private platform: Platform
    ) {}

    ngOnInit() {
        this.platform.backButton.subscribe(() => {
            navigator["app"].exitApp();
        });

        const platform = Capacitor.getPlatform();
        if (platform !== "web") {
            this.networkService.getStatus().then((status) => {
                this.checkConnection(status);
            });
            this.networkService.addListener(this.checkConnection.bind(this));
        }
    }

    private checkConnection(status) {
        if (!status.connected) {
            this.modalService.showAlert(
                "No internet connection",
                "Please turn on the wifi or mobile data. Only the already loaded data will be displayed"
            );
        } else {
            this.notificationService.sendNotification([
                {
                    title: "Welcome back",
                    body: "Is good having you online again",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000) },
                    sound: null,
                    attachments: null,
                    actionTypeId: "",
                    extra: null,
                },
            ]);
        }
    }
}
