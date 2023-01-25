import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EntradaWebComponent } from './components/entrada-web/entrada-web.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { DisplayMenuComponent } from './components/display-menu/display-menu.component';
import { OpcionesCrudComponent } from './components/opciones-crud/opciones-crud.component';
import { MenuTiendaComponent } from './components/Tienda/menu-tienda/menu-tienda.component';
import { VentaAClientesComponent } from './components/Tienda/venta-a-clientes/venta-a-clientes.component';
import { JugueteSeleccionadoComponent } from './components/Tienda/juguete-seleccionado/juguete-seleccionado.component';
import { JugueteVendidoScreenComponent } from './components/Tienda/juguete-vendido-screen/juguete-vendido-screen.component';
import { CompraProveedoresComponent } from './components/Tienda/compra-proveedores/compra-proveedores.component';
import { JugueteAComprarComponent } from './components/Tienda/juguete-a-comprar/juguete-a-comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaWebComponent,
    DisplayMenuComponent,
    OpcionesCrudComponent,
    MenuTiendaComponent,
    VentaAClientesComponent,
    JugueteSeleccionadoComponent,
    JugueteVendidoScreenComponent,
    CompraProveedoresComponent,
    JugueteAComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
