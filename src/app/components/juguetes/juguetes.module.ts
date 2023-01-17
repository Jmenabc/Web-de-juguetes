import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { JuguetesRoutingModule } from './juguetes-routing.module';


@NgModule({
  declarations: [
    JuguetesComponent
  ],
  imports: [
    CommonModule,
    JuguetesRoutingModule
  ]
})
export class JuguetesModule { }
