import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapsDashboardComponent} from './maps-dashboard/maps-dashboard.component';

const routes: Routes = [
  { path: '', component: MapsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
