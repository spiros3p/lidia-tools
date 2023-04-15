import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [PageTitleComponent],
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  exports: [PageTitleComponent],
})
export class PageTitleModule {}
