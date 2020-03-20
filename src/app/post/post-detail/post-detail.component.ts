import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-post-detail",
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.component.scss"]
})
export class PostDetailComponent implements OnInit {
    lorem =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    rotateImg = 0;

    images = [
        "bandit",
        "batmobile",
        "blues-brothers",
        "bueller",
        "delorean",
        "eleanor",
        "general-lee",
        "ghostbusters",
        "knight-rider",
        "mirth-mobile"
    ];

    item = {
        id: 1,
        name: 1 + " - " + this.images[this.rotateImg],
        imgSrc: this.getImgSrc(),
        avatarSrc: this.getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: this.lorem.substring(0, Math.random() * (this.lorem.length - 100) + 100)
    };

    user1;
    user2;
    user3;

    get randomString() {
        return this.lorem.substring(0, Math.random() * (this.lorem.length - 100) + 100);
    }

    constructor() {}

    ngOnInit() {
        this.user1 = this.randomString;
        this.user2 = this.randomString;
        this.user3 = this.randomString;
    }

    getImgSrc() {
        const src = "https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png";
        this.rotateImg++;
        if (this.rotateImg === this.images.length) {
            this.rotateImg = 0;
        }
        return src;
    }
}
