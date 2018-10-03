import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  declarations: [MapsDashboardComponent]
})
export class MapsModule { }
