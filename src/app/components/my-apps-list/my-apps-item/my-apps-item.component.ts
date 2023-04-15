import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/services/utils';
@Component({
  selector: 'app-my-apps-item',
  templateUrl: './my-apps-item.component.html',
  styleUrls: ['./my-apps-item.component.scss'],
})
export class MyAppsItemComponent {
  @Input() app: any = {};
  cleanUpPageTitle = Utils.cleanUpPageTitle;
}
