import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CommentTreeComponent } from "./components/comment-tree/comment-tree.component";
import { MediaComponent } from "./components/media/media.component";
import { UpVoteComponent } from "./components/up-vote/up-vote.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostOverviewComponent } from "./post-overview/post-overview.component";
import { PostRoutingModule } from "./post-routing.module";

@NgModule({
    declarations: [
        PostOverviewComponent,
        PostDetailComponent,
        UpVoteComponent,
        MediaComponent,
        CommentTreeComponent
    ],
    imports: [PostRoutingModule, SharedModule]
})
export class PostModule {}
