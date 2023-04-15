import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-apps-item',
  templateUrl: './my-apps-item.component.html',
  styleUrls: ['./my-apps-item.component.scss'],
})
export class MyAppsItemComponent {
  @Input() app: any = {};
}
