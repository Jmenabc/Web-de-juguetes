import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ListadoProveedoresComponent } from './listado-proveedores/listado-proveedores.component';
import { EditarProveedoresComponent } from './editar-proveedores/editar-proveedores.component';
import { AnadirProveedoresComponent } from './anadir-proveedores/anadir-proveedores.component';



const routes: Routes = [
  { path: "proveedores", component: ProveedoresComponent },
  { path: "proveedores/añadir", component: AnadirProveedoresComponent },
  { path: "proveedores/lista/editar/:id", component: EditarProveedoresComponent },
  { path: "proveedores/lista", component: ListadoProveedoresComponent },
  { path: "**", redirectTo: "proveedores", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
