import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { AnadirClientesComponent } from './anadir-clientes/anadir-clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  declarations: [
    ClientesComponent,
    AnadirClientesComponent,
    ListadoClientesComponent,
    EditarClientesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
