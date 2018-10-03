import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HikesDashboardComponent} from './hikes-dashboard/hikes-dashboard.component';

const routes: Routes = [
  { path: '', component: HikesDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
