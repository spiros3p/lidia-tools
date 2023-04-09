import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarModule } from "./navbar/navbar.module";
import { MyAppsListModule } from "./my-apps-list/my-apps-list.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarModule, MyAppsListModule],
  exports: [NavbarModule, MyAppsListModule],
})
export class ComponentsModule {}
