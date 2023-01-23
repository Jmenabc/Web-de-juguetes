import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { JuguetesRoutingModule } from './juguetes-routing.module';
import { AnadirJuguetesComponent } from './anadir-juguetes/anadir-juguetes.component';
import { EditarJuguetesComponent } from './editar-juguetes/editar-juguetes.component';
import { VenderJuguetesComponent } from './vender-juguetes/vender-juguetes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JuguetesComponent,
    AnadirJuguetesComponent,
    EditarJuguetesComponent,
    VenderJuguetesComponent,
  ],
  imports: [
    CommonModule,
    JuguetesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JuguetesModule { }
