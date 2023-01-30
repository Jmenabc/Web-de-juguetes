import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  constructor(private _location: Location) { }

  volverAtras() {
    this._location.back();
  }
}
