import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
    @Input() contentId: string;

    isAuthenticated: boolean = false;

    appPages = [
        {
            url: "country",
            icon: "earth",
            title: "By country"
        }
    ];

    public categories = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

    constructor() {}

    ngOnInit() {}
}
