import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
    @Input() contentId: string;

    isAuthenticated: boolean = true;
    user = {
        username: "MyUser",
        email: "myUser@emai.com"
    };
    appPages = [
        {
            url: "posts",
            icon: "smiley",
            title: "All Posts"
        },
        {
            url: "country",
            icon: "earth",
            title: "By country"
        },
        {
            url: "about",
            icon: "about",
            title: "About"
        }
    ];

    public categories = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

    constructor() {}

    ngOnInit() {}
}
