import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.css']
})
export class JuguetesComponent {
  constructor(private _location: Location) { }

  volverAtras() {
    this._location.back();
  }
}
