import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaAClientesComponent } from './venta-a-clientes.component';

describe('VentaAClientesComponent', () => {
  let component: VentaAClientesComponent;
  let fixture: ComponentFixture<VentaAClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaAClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaAClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
