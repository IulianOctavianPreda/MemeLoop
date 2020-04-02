import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostApiService } from "src/app/api/apis/posts.api";

import { PostDetail } from "./../../api/types/post-detail";

@Component({
    selector: "app-post-detail",
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.component.scss"]
})
export class PostDetailComponent implements OnInit {
    item: PostDetail;

    constructor(private service: PostApiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.item = this.activatedRoute.snapshot.data.post;
    }
}
