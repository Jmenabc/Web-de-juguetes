import { Component } from '@angular/core';
import { JugueteriaService } from 'src/app/services/jugueteria.service';

@Component({
  selector: 'app-juguete-seleccionado',
  templateUrl: './juguete-seleccionado.component.html',
  styleUrls: ['./juguete-seleccionado.component.css']
})
export class JugueteSeleccionadoComponent {
  constructor(private firebase: JugueteriaService) { }
  //Requisitos para llamar a la coleccion y pasar los datos a la vista
  coleccion = "Juguetes";
  juguetesLista: any[] = [];
  documentId: string = '';

  getTodosLosJuguetes() {
    this.firebase.cogerTodos(this.coleccion).subscribe(
      (resp: any) => {
        this.juguetesLista = [];
        resp.forEach((juguetesSnapshot: any) => {
          this.juguetesLista.push(
            {
              id: this.documentId,
              ...juguetesSnapshot.payload.doc.data(),
              documentId: juguetesSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  ngOnInit() {
    this.getTodosLosJuguetes();
  }
}
