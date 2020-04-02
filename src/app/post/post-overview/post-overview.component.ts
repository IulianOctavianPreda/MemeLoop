import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonInfiniteScroll, IonVirtualScroll } from "@ionic/angular";

import { PostApiService } from "./../../api/apis/posts.api";
import { PostDetail } from "./../../api/types/post-detail";

@Component({
    selector: "app-post-overview",
    templateUrl: "./post-overview.component.html",
    styleUrls: ["./post-overview.component.scss"]
})
export class PostOverviewComponent implements OnInit {
    @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonVirtualScroll, { static: false }) virtualScroll: IonVirtualScroll;

    items: PostDetail[] = [];

    constructor(private service: PostApiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.items = this.activatedRoute.snapshot.data.initialPosts;
    }

    doInfinite(event) {
        setTimeout(() => {
            const skip = this.items.length;

            this.service
                .loadMorePosts(skip, 10)
                .toPromise()
                .then((results: PostDetail[]) => {
                    this.items.push(...results);
                    this.virtualScroll.checkEnd();
                    this.infiniteScroll.complete();
                });
        }, 2000);
    }

    trackByFn(index, item) {
        if (!!item) {
            return item.id;
        }
        return null;
    }
}
