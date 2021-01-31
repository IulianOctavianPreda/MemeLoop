import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, IonVirtualScroll, Platform } from '@ionic/angular';

import { PostApiService } from '../../../api/apis/posts.api';
import { PostDetail } from '../../../api/types/post-detail';

@Component({
    selector: 'app-post-overview',
    templateUrl: './post-overview.component.html',
    styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

    items: PostDetail[] = [];
    location;
    constructor(private service: PostApiService, private activatedRoute: ActivatedRoute, private platform: Platform) {
        this.location = activatedRoute.snapshot.queryParams['location'];
    }

    ngOnInit() {
        // this.platform.backButton.subscribe(() => {
        //     navigator["app"].exitApp();
        // });
        this.items = this.activatedRoute.snapshot.data.initialPosts;
    }

    doInfinite(event) {
        setTimeout(() => {
            const skip = this.items.length;

            this.service
                .loadMorePosts(skip, 10, this.location)
                .toPromise()
                .then((results: PostDetail[]) => {
                    this.items.push(...results);
                    this.virtualScroll.checkEnd();
                    this.infiniteScroll.complete();
                });
        }, 2000);
    }

    upvote(event, id) {
        const item = this.items.find((x) => x.id === id);
        if (item['alreadyUpvoted'] === true) {
        } else {
            this.service
                .upvote(id)
                .toPromise()
                .then((post) => {
                    item.stats = post.stats;
                    item['alreadyUpvoted'] = true;
                });
        }
    }

    downvote(event, id) {
        const item = this.items.find((x) => x.id === id);
        if (item['alreadyDownvoted'] === true) {
        } else {
            this.service
                .downvote(id)
                .toPromise()
                .then((post) => {
                    item.stats = post.stats;
                    item['alreadyDownvoted'] = true;
                });
        }
    }

    trackByFn(index, item) {
        if (!!item) {
            return item.id;
        }
        return null;
    }
}
