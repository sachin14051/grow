import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { sharedRoutingModule } from './shared.routing';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [
    MapComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    sharedRoutingModule,
    MatCardModule 
  ]
})
export class SharedModule { }
