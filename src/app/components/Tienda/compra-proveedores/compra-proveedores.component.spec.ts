import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraProveedoresComponent } from './compra-proveedores.component';

describe('CompraProveedoresComponent', () => {
  let component: CompraProveedoresComponent;
  let fixture: ComponentFixture<CompraProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
