import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { of } from "rxjs/internal/observable/of";

import { StorageService } from "./../../shared/services/storage.service";
import { Posts } from "./../models/posts";
import { PostDetail, PostSave } from "./../types/post-detail";
import { UserApiService } from "./users.api";

@Injectable({
    providedIn: "root",
})
export class PostApiService implements OnDestroy {
    posts: BehaviorSubject<PostDetail[]> = new BehaviorSubject<PostDetail[]>(Posts);

    constructor(private storage: StorageService, private userService: UserApiService) {
        storage.getObject("posts").then((storedPosts: { posts: PostDetail[] }) => {
            console.log(storedPosts);
            if (!!storedPosts) {
                this.posts = new BehaviorSubject<PostDetail[]>(storedPosts.posts);
            }
        });
    }

    public loadMorePosts(skip, take) {
        return of(this.posts.value.slice(skip, skip + take));
    }

    public get() {
        return of(this.posts.value.filter((x) => x.id < 3));
    }

    public getPost(id) {
        return of(this.posts.value.find((x) => x.id == id));
    }

    public upvote(id) {
        const posts = this.posts.value;
        const post = posts.find((x) => x.id == id);
        post.stats.upvotes += 1;
        this.posts.next(posts);
        this.saveToStorage();
        return of(post);
    }

    public downvote(id) {
        const posts = this.posts.value;
        const post = posts.find((x) => x.id == id);
        post.stats.downvotes = post.stats.downvotes + 1;
        this.posts.next(posts);
        this.saveToStorage();
        return of(post);
    }

    public addComment(id, comment) {
        const posts = this.posts.value;
        const post = posts.find((x) => x.id == id);
        post.comments.push({
            reply: [],
            comment,
            stats: {
                upvotes: 0,
                downvotes: 0,
            },
            user: this.userService.getLoggedInUser(),
            id: Math.max(...post.comments.map((x) => x.id)),
        });
        this.posts.next(posts);
        this.saveToStorage();
        return of(post);
    }

    public upload(post: PostSave) {
        const postIds = this.posts.value.map((x) => x.id);
        const postDetail = {
            id: Math.max(...postIds) + 1,
            path: post.path,
            title: post.title,
            stats: { upvotes: 0, downvotes: 0 },
            comments: [],
        };
        this.posts.next([...this.posts.value, postDetail]);
        this.saveToStorage();
        return postDetail.id;
    }

    saveToStorage() {
        this.storage.setObject("posts", { posts: this.posts.value });
    }

    ngOnDestroy() {
        this.saveToStorage();
    }
}
