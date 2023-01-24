import { Component } from '@angular/core';
import { JugueteriaService } from 'src/app/services/jugueteria.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-juguetes',
  templateUrl: './editar-juguetes.component.html',
  styleUrls: ['./editar-juguetes.component.css']
})
export class EditarJuguetesComponent {
  //Declaramos la coleccion de firebase, id, y el objeto en los que vamos a trabajar
  coleccion: string = "Juguetes";
  documentId: string = "";
  juguete: any;

  constructor(private firebase: JugueteriaService, private fb: FormBuilder,
    private ruta: ActivatedRoute) { }

  formjuguetes = this.fb.group({
    nombre: [],
    descripcion: [],
    precio: [],
    proveedor: [],
  });

  EditarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('idJuguete')!;
    this.firebase.cogerUno(this.coleccion, this.documentId).subscribe((resp: any) => {
      this.formjuguetes.setValue(resp.payload.data());
    });
  }
  //Metodo para actualizar los datos del portero
  ActualizarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('idJuguete')!;
    this.firebase.Actualizar(this.coleccion, this.documentId, this.formjuguetes.value)

  }

  Eliminar() {
    this.documentId = this.ruta.snapshot.paramMap.get('idJuguete')!;
    this.firebase.Eliminar(this.coleccion, this.documentId);
  }

  ngOnInit() {
    this.EditarDatos();
  }


}
