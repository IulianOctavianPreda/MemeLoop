import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
    constructor() {}
        this.platform.backButton.subscribe(() => {
            navigator["app"].exitApp();
        });

    ngOnInit() {}
}
