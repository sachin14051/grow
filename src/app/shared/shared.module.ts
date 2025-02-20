import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { sharedRoutingModule } from './shared.routing';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    sharedRoutingModule
  ]
})
export class SharedModule { }
