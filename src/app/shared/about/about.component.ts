import { Component, OnInit } from "@angular/core";

import { AccelerometerService } from "./../services/accelerometer.service";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
    acceleration = {
        x: 0,
        y: 0,
        z: 0,
    };
    constructor(private accelerometer: AccelerometerService) {}

    get accelerationDataX() {
        if (!!this.acceleration && this.acceleration.x !== 0) {
            return `X: ${this.acceleration.x}`;
        }
        return "No acceleration data";
    }
    get accelerationDataY() {
        if (!!this.acceleration && this.acceleration.y !== 0) {
            return `Y: ${this.acceleration.y}`;
        }
        return "No acceleration data";
    }
    get accelerationDataZ() {
        if (!!this.acceleration && this.acceleration.z !== 0) {
            return `Z: ${this.acceleration.z}`;
        }
        return "No acceleration data";
    }

    ngOnInit() {
        this.accelerometer.addAccelerometerListener((event) => {
            this.acceleration.x = event.acceleration.x;
            this.acceleration.y = event.acceleration.y;
            this.acceleration.z = event.acceleration.z;
        });
    }
}
