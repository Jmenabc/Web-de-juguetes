import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  constructor(private _location: Location) { }

  volverAtras() {
    this._location.back();
  }
}
