import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CommentTreeComponent } from "./components/comment-tree/comment-tree.component";
import { MediaComponent } from "./components/media/media.component";
import { StatsComponent } from "./components/stats/stats.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostOverviewComponent } from "./post-overview/post-overview.component";
import { PostRoutingModule } from "./post-routing.module";
import { PostDetailResolve } from "./services/post-detail.resolve";
import { PostsResolve } from "./services/posts.resolve";

@NgModule({
    declarations: [
        PostOverviewComponent,
        PostDetailComponent,
        StatsComponent,
        MediaComponent,
        CommentTreeComponent
    ],
    providers: [PostDetailResolve, PostsResolve],
    imports: [PostRoutingModule, SharedModule]
})
export class PostModule {}
