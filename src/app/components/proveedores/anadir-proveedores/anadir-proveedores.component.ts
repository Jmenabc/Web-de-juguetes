import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JugueteriaService } from 'src/app/services/jugueteria.service';
import { PROVEEDOR } from '../proveedor';

@Component({
  selector: 'app-anadir-proveedores',
  templateUrl: './anadir-proveedores.component.html',
  styleUrls: ['./anadir-proveedores.component.css']
})
export class AnadirProveedoresComponent {

  constructor(private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private firestore: JugueteriaService) { }
  //La coleccion donde vamos a añadir los juguetes
  coleccion = "Proveedores";
  documentId: string = '';
  proveedor?: PROVEEDOR;

  //Declaramos nuestro formulario para enviar los datos del juguete
  formProveedor = this.fb.group({
    nombre: [],
    nif: [],
    contacto: [],
    direccion: [],
  });

  crearProveedor() {
    this.firestore.Crear(this.coleccion, this.formProveedor.value);
  }
}
