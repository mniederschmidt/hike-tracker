import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotosDashboardComponent} from './photos-dashboard/photos-dashboard.component';

const routes: Routes = [
  { path: '', component: PhotosDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
