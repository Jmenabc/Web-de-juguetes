import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EntradaWebComponent } from './components/entrada-web/entrada-web.component';
import { JuguetesComponent } from './components/juguetes/juguetes/juguetes.component';
import { DisplayMenuComponent } from './components/display-menu/display-menu.component';
import { OpcionesCrudComponent } from './components/opciones-crud/opciones-crud.component';

const routes: Routes = [
  { path: "portal", component: EntradaWebComponent },
  { path: "menu", component: DisplayMenuComponent },
  { path: "opcionesCrud", component: OpcionesCrudComponent },
  { path: "juguet", loadChildren: () => import("./components/juguetes/juguetes.module").then(m => m.JuguetesModule) },
  { path: "client", loadChildren: () => import("./components/clientes/clientes.module").then(m => m.ClientesModule) },
  { path: "proveed", loadChildren: () => import("./components/proveedores/proveedores.module").then(m => m.ProveedoresModule) },
  { path: "**", redirectTo: "portal", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
