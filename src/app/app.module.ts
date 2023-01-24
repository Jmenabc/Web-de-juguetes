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

@NgModule({
  declarations: [
    AppComponent,
    EntradaWebComponent,
    DisplayMenuComponent,
    OpcionesCrudComponent
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
