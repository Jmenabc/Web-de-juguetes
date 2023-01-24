import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { AnadirClientesComponent } from './anadir-clientes/anadir-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';


const routes: Routes = [
  { path: "clientes", component: ClientesComponent },
  { path: "clientes/añadir", component: AnadirClientesComponent },
  { path: "clientes/lista/editar/:id", component: EditarClientesComponent },
  { path: "clientes/lista", component: ListadoClientesComponent },
  { path: "**", redirectTo: "clientes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
