import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { LayoutHeaderComponent } from "./layout-header/layout-header.component";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    declarations: [LayoutHeaderComponent, MenuComponent],
    imports: [CommonModule, IonicModule],
    exports: [LayoutHeaderComponent, MenuComponent, CommonModule, IonicModule]
})
export class SharedModule {}
