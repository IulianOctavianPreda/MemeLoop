import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-layout-header",
    templateUrl: "./layout-header.component.html",
    styleUrls: ["./layout-header.component.scss"],
})
export class LayoutHeaderComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    redirectToUpload() {
        this.router.navigate(["/upload"]);
    }
}
