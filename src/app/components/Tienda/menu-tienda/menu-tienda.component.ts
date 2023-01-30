import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-tienda',
  templateUrl: './menu-tienda.component.html',
  styleUrls: ['./menu-tienda.component.css']
})
export class MenuTiendaComponent {

  constructor(private _location: Location) { }

  volverAtras() {
    this._location.back();
  }
}
