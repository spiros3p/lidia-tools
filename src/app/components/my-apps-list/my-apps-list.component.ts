import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { myRoutes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-my-apps-list',
  templateUrl: './my-apps-list.component.html',
  styleUrls: ['./my-apps-list.component.scss'],
})
export class MyAppsListComponent implements OnInit {
  apps: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.apps = myRoutes.map((route) => ({
      path: route.path,
      description: route.description,
    }));
  }
}
