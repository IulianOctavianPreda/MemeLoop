import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { ProfileComponent } from "../pages/profile/profile.component";
import { AboutComponent } from "../shared/about/about.component";
import { CategoryCountriesComponent } from "../shared/category-countries/category-countries.component";
import { UploadComponent } from "../shared/upload/upload.component";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "posts",
            },
            {
                path: "posts",
                loadChildren: () => import("../pages/post/post.module").then((m) => m.PostModule),
            },
            {
                path: "profile",
                component: ProfileComponent,
            },
            {
                path: "upload",
                component: UploadComponent,
            },
            {
                path: "country",
                component: CategoryCountriesComponent,
            },
            {
                path: "about",
                component: AboutComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
