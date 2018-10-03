import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTrailsDashboardComponent} from './my-trails-dashboard/my-trails-dashboard.component';

const routes: Routes = [
  { path: '', component: MyTrailsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTrailsRoutingModule { }
