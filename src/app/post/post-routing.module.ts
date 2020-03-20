import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostOverviewComponent } from "./post-overview/post-overview.component";

const routes: Routes = [
    {
        path: "",
        // pathMatch: "full",
        children: [
            {
                path: "",
                component: PostOverviewComponent
            },
            // {
            //     path: "overview",
            //     component: PostOverviewComponent
            // },
            {
                path: ":id",
                component: PostDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}
