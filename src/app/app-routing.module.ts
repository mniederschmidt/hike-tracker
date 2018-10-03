import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'maps', loadChildren: './maps/maps.module#MapsModule'},
  {path: 'trails', loadChildren: './trails/trails.module#TrailsModule'},
  {path: 'mytrails', loadChildren: './my-trails/my-trails.module#MyTrailsModule'},
  {path: 'photos', loadChildren: './photos/photos.module#PhotosModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
