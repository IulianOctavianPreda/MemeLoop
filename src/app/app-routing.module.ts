import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./shared/about/about.component";
import { CategoryCountriesComponent } from "./shared/category-countries/category-countries.component";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "posts"
            },
            {
                path: "posts",
                loadChildren: () => import("./post/post.module").then((m) => m.PostModule)
            },
            {
                path: "country",
                component: CategoryCountriesComponent
            },
            {
                path: "about",
                component: AboutComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
