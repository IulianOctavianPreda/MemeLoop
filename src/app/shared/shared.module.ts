import { AgmCoreModule, GoogleMapsAPIWrapper } from "@agm/core";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IonicModule } from "@ionic/angular";

import { LayoutHeaderComponent } from "../core/layout-header/layout-header.component";
import { MenuComponent } from "../core/menu/menu.component";
import { ProfileComponent } from "../pages/profile/profile.component";
import { AboutComponent } from "./about/about.component";
import { CategoryCountriesComponent } from "./category-countries/category-countries.component";
import { MapsComponent } from "./maps/maps.component";
import { UploadComponent } from "./upload/upload.component";

@NgModule({
    declarations: [
        LayoutHeaderComponent,
        MenuComponent,
        CategoryCountriesComponent,
        AboutComponent,
        ProfileComponent,
        UploadComponent,
        MapsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FontAwesomeModule,
        AgmCoreModule.forRoot({
            apiKey: "key",
            libraries: ["geometry", "places"],
        }),
    ],
    exports: [
        LayoutHeaderComponent,
        MenuComponent,
        CategoryCountriesComponent,
        CommonModule,
        IonicModule,
        RouterModule,
        AboutComponent,
        ProfileComponent,
        FontAwesomeModule,
        UploadComponent,
        AgmCoreModule,
    ],
    providers: [GoogleMapsAPIWrapper],
})
export class SharedModule {}
