import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-opciones-crud',
  templateUrl: './opciones-crud.component.html',
  styleUrls: ['./opciones-crud.component.css']
})
export class OpcionesCrudComponent {

  constructor(private _location: Location) { }

  volverAtras() {
    this._location.back();
  }

}
