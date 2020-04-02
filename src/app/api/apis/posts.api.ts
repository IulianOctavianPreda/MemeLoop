import { Injectable } from "@angular/core";
import { of } from "rxjs/internal/observable/of";

import { Posts } from "./../models/posts";

@Injectable({
    providedIn: "root"
})
export class PostApiService {
    public loadMorePosts(skip, take) {
        return of(Posts.slice(skip, skip + take));
    }

    public get() {
        return of(Posts.filter((x) => x.id < 3));
    }

    public getPost(id) {
        return of(Posts.find((x) => x.id == id));
    }

    public upvote(id) {
        const post = Posts.find((x) => x.id == id);
        post.stats.upvotes = post.stats.upvotes + 1;
        return of(post);
    }

    public downvote(id) {
        const post = Posts.find((x) => x.id == id);
        post.stats.downvotes = post.stats.downvotes + 1;
        return of(post);
    }
}
