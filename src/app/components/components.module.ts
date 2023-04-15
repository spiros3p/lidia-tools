import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { MyAppsListModule } from './my-apps-list/my-apps-list.module';
import { PageTitleModule } from './page-title/page-title.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarModule, MyAppsListModule, PageTitleModule],
  exports: [NavbarModule, MyAppsListModule, PageTitleModule],
})
export class ComponentsModule {}
