import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll, IonVirtualScroll } from "@ionic/angular";

@Component({
    selector: "app-post-overview",
    templateUrl: "./post-overview.component.html",
    styleUrls: ["./post-overview.component.scss"]
})
export class PostOverviewComponent implements OnInit {
    items: any[] = [];
    lorem =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
    rotateImg = 0;
    loaded = false;

    @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonVirtualScroll, { static: false }) virtualScroll: IonVirtualScroll;

    ngOnInit() {}

    constructor() {
        console.log("is initialized");
        this.loadData(20);
        this.loaded = true;
        this.doInfinite(undefined);
    }

    doInfinite(event) {
        console.log("loadData came");
        setTimeout(() => {
            const start = this.items.length;
            const end = this.items.length + 20;
            console.log("start: ", start, "end: ", end);
            this.loadData(20);
            console.log("Done", this.items);
            this.virtualScroll.checkEnd();
            this.infiniteScroll.complete();
        }, 2000);
    }

    private loadData(n) {
        for (let i = 0; i < n; i++) {
            this.items.push({
                id: this.items.length,
                name: i + " - " + this.images[this.rotateImg],
                imgSrc: this.getImgSrc(),
                avatarSrc: this.getImgSrc(),
                imgHeight: Math.floor(Math.random() * 50 + 150),
                content: this.lorem.substring(0, Math.random() * (this.lorem.length - 100) + 100)
            });
            this.rotateImg++;
            if (this.rotateImg === this.images.length) {
                this.rotateImg = 0;
            }
        }
    }

    getImgSrc() {
        const src = "https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png";
        this.rotateImg++;
        if (this.rotateImg === this.images.length) {
            this.rotateImg = 0;
        }
        return src;
    }

    trackByFn(index, item) {
        if (!!item) {
            return item.id;
        }
        return null;
    }
}
