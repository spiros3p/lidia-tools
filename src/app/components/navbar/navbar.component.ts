import { Component } from '@angular/core';
// import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { faChessQueen, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuCollapsed = true;
  faChessQueen = faChessQueen;
  faBitcoinSign = faBitcoinSign;
}
