import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrailsRoutingModule } from './trails-routing.module';
import { TrailsDashboardComponent } from './trails-dashboard/trails-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    TrailsRoutingModule
  ],
  declarations: [TrailsDashboardComponent]
})
export class TrailsModule { }
