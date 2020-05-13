import { Injectable } from "@angular/core";
import { Camera, CameraResultType } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class CameraService {
    takePicture() {
        return Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri,
        }).then((x) => x.webPath);
    }
}
