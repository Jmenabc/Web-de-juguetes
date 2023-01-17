import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuguetesComponent } from './juguetes/juguetes.component';

const routes: Routes = [
  { path: "juguetes", component: JuguetesComponent },
  { path: "**", redirectTo: "juguetes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuguetesRoutingModule { }
