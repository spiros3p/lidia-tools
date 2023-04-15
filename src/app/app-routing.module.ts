import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrieverComponent } from './tools/retriever/retriever.component';
import { MyAppsListComponent } from './components/my-apps-list/my-apps-list.component';

export const myRoutes = [
  {
    path: 'xls-retriever',
    component: RetrieverComponent,
    description: 'Get the important data you need. e.g., emails from an excel file',
  },
];

const routes: Routes = [...myRoutes, { path: '', component: MyAppsListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
