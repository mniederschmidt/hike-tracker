import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrailsDashboardComponent} from './trails-dashboard/trails-dashboard.component';

const routes: Routes = [
  { path: '', component: TrailsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrailsRoutingModule { }
