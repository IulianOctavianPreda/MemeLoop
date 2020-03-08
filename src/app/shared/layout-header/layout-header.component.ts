import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
    selector: "app-layout-header",
    templateUrl: "./layout-header.component.html",
    styleUrls: ["./layout-header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
