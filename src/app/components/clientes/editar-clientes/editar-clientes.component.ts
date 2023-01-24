import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JugueteriaService } from 'src/app/services/jugueteria.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent {
  //Declaramos la coleccion de firebase, id, y el objeto en los que vamos a trabajar
  coleccion: string = "Clientes";
  documentId: string = "";
  cliente: any;

  constructor(private firebase: JugueteriaService, private fb: FormBuilder,
    private ruta: ActivatedRoute) { }

  formClientes= this.fb.group({
    nombre: [],
    nif: [],
    contacto: [],
    direccion: [],
  });

  EditarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.cogerUno(this.coleccion, this.documentId).subscribe((resp: any) => {
      this.formClientes.setValue(resp.payload.data());
    });
  }
  //Metodo para actualizar los datos del portero
  ActualizarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.Actualizar(this.coleccion, this.documentId, this.formClientes.value)

  }

  Eliminar() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.Eliminar(this.coleccion, this.documentId);
  }

  ngOnInit() {
    this.EditarDatos();
  }

}
