import { Component } from '@angular/core';
import { JugueteriaService } from 'src/app/services/jugueteria.service';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.css']
})
export class ListadoProveedoresComponent {
  constructor(private firebase: JugueteriaService) { }
  //Requisitos para llamar a la coleccion y pasar los datos a la vista
  coleccion = "Proveedores";
  proveedoresLista: any[] = [];
  documentId: string = '';

  getTodosLosClientes() {
    this.firebase.cogerTodos(this.coleccion).subscribe(
      (resp: any) => {
        this.proveedoresLista = [];
        resp.forEach((proveedoresSnapshot: any) => {
          this.proveedoresLista.push(
            {
              ...proveedoresSnapshot.payload.doc.data(),
              documentId: proveedoresSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  ngOnInit() {
    this.getTodosLosClientes();
  }
}
