import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

import { PostApiService } from "../../api/apis/posts.api";
import { PostDetail } from "../../api/types/post-detail";

@Injectable()
export class PostsResolve implements Resolve<Observable<PostDetail[]>> {
    constructor(private service: PostApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostDetail[]> {
        return this.service.get();
    }
}
