import { Component } from '@angular/core';
import { JugueteriaService } from 'src/app/services/jugueteria.service';

@Component({
  selector: 'app-venta-a-clientes',
  templateUrl: './venta-a-clientes.component.html',
  styleUrls: ['./venta-a-clientes.component.css']
})
export class VentaAClientesComponent {

  constructor(private firebase: JugueteriaService) { }
  //Requisitos para llamar a la coleccion y pasar los datos a la vista
  coleccion = "Clientes";
  clientesLista: any[] = [];
  documentId: string = '';

  getTodosLosClientes() {
    this.firebase.cogerTodos(this.coleccion).subscribe(
      (resp: any) => {
        this.clientesLista = [];
        resp.forEach((clientesSnapshot: any) => {
          this.clientesLista.push(
            {
              ...clientesSnapshot.payload.doc.data(),
              documentId: clientesSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  ngOnInit() {
    this.getTodosLosClientes();
  }
}
