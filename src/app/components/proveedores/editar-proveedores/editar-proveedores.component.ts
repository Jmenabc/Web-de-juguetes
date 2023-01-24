import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JugueteriaService } from 'src/app/services/jugueteria.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent {

  //Declaramos la coleccion de firebase, id, y el objeto en los que vamos a trabajar
  coleccion: string = "Proveedores";
  documentId: string = "";
  cliente: any;

  constructor(private firebase: JugueteriaService, private fb: FormBuilder,
    private ruta: ActivatedRoute, private _location: Location) { }

  formProveedor = this.fb.group({
    nombre: [],
    nif: [],
    contacto: [],
    direccion: [],
  });

  EditarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.cogerUno(this.coleccion, this.documentId).subscribe((resp: any) => {
      this.formProveedor.setValue(resp.payload.data());
    });
  }
  //Metodo para actualizar los datos del portero
  ActualizarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.Actualizar(this.coleccion, this.documentId, this.formProveedor.value)
    this._location.back();
  }

  Eliminar() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.Eliminar(this.coleccion, this.documentId);
    this._location.back();
  }

  ngOnInit() {
    this.EditarDatos();
  }
}
