import { Component } from '@angular/core';
import { JugueteriaService } from 'src/app/services/jugueteria.service';
import { JUGUETES } from '../juguetes';

@Component({
  selector: 'app-vender-juguetes',
  templateUrl: './vender-juguetes.component.html',
  styleUrls: ['./vender-juguetes.component.css']
})
export class VenderJuguetesComponent {

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
