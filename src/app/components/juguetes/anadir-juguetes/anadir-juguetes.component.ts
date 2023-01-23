import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JugueteriaService } from 'src/app/services/jugueteria.service';
import { JUGUETES } from '../juguetes';

@Component({
  selector: 'app-anadir-juguetes',
  templateUrl: './anadir-juguetes.component.html',
  styleUrls: ['./anadir-juguetes.component.css']
})
export class AnadirJuguetesComponent {

  constructor(private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private firestore: JugueteriaService) { }
  //La coleccion donde vamos a añadir los juguetes
  coleccion = "Juguetes";
  documentId: string = '';
  juguetes?: JUGUETES;

  //Declaramos nuestro formulario para enviar los datos del juguete
  formjuguetes = this.fb.group({
    nombre: [],
    descripcion: [],
    precio: [],
    proveedor: [],
  });

  crearJuguete() {
    this.firestore.Crear(this.coleccion,this.formjuguetes.value);
  }

}
