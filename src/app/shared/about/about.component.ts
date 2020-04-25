import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
    // constructor(private deviceOrientation: DeviceOrientation) {}

    ngOnInit() {
        // // Get the device current compass heading
        // this.deviceOrientation.getCurrentHeading().then(
        //     (data: DeviceOrientationCompassHeading) => console.log(data),
        //     (error: any) => console.log(error)
        // );
        // // Watch the device compass heading change
        // this.deviceOrientation
        //     .watchHeading()
        //     .subscribe((data: DeviceOrientationCompassHeading) => console.log(data));
    }
}
