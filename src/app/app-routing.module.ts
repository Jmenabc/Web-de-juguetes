import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EntradaWebComponent } from './components/entrada-web/entrada-web.component';
import { JuguetesComponent } from './components/juguetes/juguetes/juguetes.component';

const routes: Routes = [
  { path: "portal", component: EntradaWebComponent },
  //{ path: "tienda", loadChildren: () => import("./components/juguetes/juguetes.module").then(m => m.JuguetesModule) },
  //{ path: "tienda", loadChildren: () => import("./components/clientes/clientes.module").then(m => m.ClientesModule) },
  { path: "tienda", loadChildren: () => import("./components/proveedores/proveedores.module").then(m => m.ProveedoresModule) },
  { path: "**", redirectTo: "portal", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
