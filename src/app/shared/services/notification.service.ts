import { Injectable } from "@angular/core";
import { LocalNotification, Plugins } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class NotificationService {
    sendNotification(notifications: LocalNotification[]) {
        return Plugins.LocalNotifications.areEnabled().then((data) => {
            if (data.value) {
                Plugins.LocalNotifications.schedule({ notifications });
            } else {
                Plugins.LocalNotifications.requestPermission().then((permission) => {
                    if (permission.granted) {
                        Plugins.LocalNotifications.schedule({ notifications });
                    }
                });
            }
        });
    }
    /*
    notifications: [
              {
                title: "Title",
                body: "Body",
                id: 1,
                schedule: { at: new Date(Date.now() + 1000 * 5) },
                sound: null,
                attachments: null,
                actionTypeId: "",
                extra: null
              }
            ]
    */
}
