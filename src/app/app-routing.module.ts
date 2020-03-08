import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    // {
    //     path: "",
    //     component: LayoutHeaderComponent,
    //     outlet: "header"
    // },
    {
        path: "",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "folder/1"
            },
            {
                path: "posts",
                loadChildren: () => import("./post/post.module").then((m) => m.PostModule)
            },
            {
                path: "folder/:id",
                loadChildren: () => import("./folder/folder.module").then((m) => m.FolderPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
