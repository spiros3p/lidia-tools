import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NgbCollapseModule, RouterLink],
  exports: [NavbarComponent],
})
export class NavbarModule {}
