import { Injectable } from "@angular/core";
import { Motion, MotionEventResult } from "@capacitor/core";

@Injectable({
    providedIn: "root",
})
export class AccelerometerService {
    addAccelerometerListener(callback: (event: MotionEventResult) => void) {
        Motion.addListener("accel", callback);
    }

    addOrientationListener(callback: (event: MotionEventResult) => void) {
        Motion.addListener("orientation", callback);
    }
}
