import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JugueteriaService } from 'src/app/services/jugueteria.service';
import { CLIENTE } from '../clientes';

@Component({
  selector: 'app-anadir-clientes',
  templateUrl: './anadir-clientes.component.html',
  styleUrls: ['./anadir-clientes.component.css']
})
export class AnadirClientesComponent {

  constructor(private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private firestore: JugueteriaService) { }
  //La coleccion donde vamos a añadir los juguetes
  coleccion = "Clientes";
  documentId: string = '';
  cliente?: CLIENTE;

  //Declaramos nuestro formulario para enviar los datos del juguete
  formClientes = this.fb.group({
    nombre: [],
    nif: [],
    contacto: [],
    direccion: [],
  });

  crearCliente() {
    this.firestore.Crear(this.coleccion, this.formClientes.value);
  }
}
