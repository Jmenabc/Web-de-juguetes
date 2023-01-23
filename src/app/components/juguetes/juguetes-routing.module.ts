import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { AnadirJuguetesComponent } from './anadir-juguetes/anadir-juguetes.component';
import { EditarJuguetesComponent } from './editar-juguetes/editar-juguetes.component';
import { VenderJuguetesComponent } from './vender-juguetes/vender-juguetes.component';

const routes: Routes = [
  { path: "juguetes", component: JuguetesComponent },
  { path: "juguetes/añadir", component: AnadirJuguetesComponent },
  { path: "juguetes/editar/:id", component: EditarJuguetesComponent },
  { path: "juguetes/vender", component: VenderJuguetesComponent },
  { path: "**", redirectTo: "juguetes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuguetesRoutingModule { }
