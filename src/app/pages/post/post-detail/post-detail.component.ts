import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostApiService } from "src/app/api/apis/posts.api";

import { PostDetail } from "../../../api/types/post-detail";

@Component({
    selector: "app-post-detail",
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.component.scss"],
})
export class PostDetailComponent implements OnInit {
    item: PostDetail;

    constructor(private service: PostApiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.item = this.activatedRoute.snapshot.data.post;
    }

    upvote(event) {
        if (this.item["alreadyUpvoted"] === true) {
        } else {
            this.service
                .upvote(this.item.id)
                .toPromise()
                .then((post) => {
                    this.item.stats = post.stats;
                    this.item["alreadyUpvoted"] = true;
                });
        }
    }

    downvote(event) {
        if (this.item["alreadyDownvoted"] === true) {
        } else {
            this.service
                .downvote(this.item.id)
                .toPromise()
                .then((post) => {
                    this.item.stats = post.stats;
                    this.item["alreadyDownvoted"] = true;
                });
        }
    }

    addComment(event) {
        this.service.addComment(this.item.id, event);
    }
}
