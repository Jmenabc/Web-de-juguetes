import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteSeleccionadoComponent } from './juguete-seleccionado.component';

describe('JugueteSeleccionadoComponent', () => {
  let component: JugueteSeleccionadoComponent;
  let fixture: ComponentFixture<JugueteSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteSeleccionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugueteSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
