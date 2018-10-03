import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrailsRoutingModule } from './my-trails-routing.module';
import { MyTrailsDashboardComponent } from './my-trails-dashboard/my-trails-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MyTrailsRoutingModule
  ],
  declarations: [MyTrailsDashboardComponent]
})
export class MyTrailsModule { }
