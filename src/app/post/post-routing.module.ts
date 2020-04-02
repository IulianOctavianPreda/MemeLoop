import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostOverviewComponent } from "./post-overview/post-overview.component";
import { PostDetailResolve } from "./services/post-detail.resolve";
import { PostsResolve } from "./services/posts.resolve";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: PostOverviewComponent,
                resolve: {
                    initialPosts: PostsResolve
                }
            },
            {
                path: ":id",
                component: PostDetailComponent,
                resolve: {
                    post: PostDetailResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}
