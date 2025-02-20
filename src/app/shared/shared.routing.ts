import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:"map" , component:MapComponent,pathMatch:'full'},
  {path:"card" , component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sharedRoutingModule { }
