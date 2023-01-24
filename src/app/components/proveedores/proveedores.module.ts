import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AnadirProveedoresComponent } from './anadir-proveedores/anadir-proveedores.component';
import { EditarProveedoresComponent } from './editar-proveedores/editar-proveedores.component';
import { ListadoProveedoresComponent } from './listado-proveedores/listado-proveedores.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProveedoresComponent,
    AnadirProveedoresComponent,
    EditarProveedoresComponent,
    ListadoProveedoresComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProveedoresModule { }
