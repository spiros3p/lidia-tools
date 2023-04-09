import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppsItemComponent } from './my-apps-item/my-apps-item.component';
import { MyAppsListComponent } from './my-apps-list.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    MyAppsItemComponent,
    MyAppsListComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    MyAppsItemComponent,
    MyAppsListComponent
  ]
})
export class MyAppsListModule { }
