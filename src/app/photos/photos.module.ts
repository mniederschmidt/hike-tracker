import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosDashboardComponent } from './photos-dashboard/photos-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  declarations: [PhotosDashboardComponent]
})
export class PhotosModule { }
