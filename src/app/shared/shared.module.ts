import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { CategoryCountriesComponent } from "./category-countries/category-countries.component";
import { LayoutHeaderComponent } from "./layout-header/layout-header.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [LayoutHeaderComponent, MenuComponent, CategoryCountriesComponent],
    imports: [CommonModule, IonicModule, RouterModule],
    exports: [
        LayoutHeaderComponent,
        MenuComponent,
        CategoryCountriesComponent,
        CommonModule,
        IonicModule,
        RouterModule
    ]
})
export class SharedModule {}
