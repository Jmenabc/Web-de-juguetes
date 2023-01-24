import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProveedoresComponent } from './anadir-proveedores.component';

describe('AnadirProveedoresComponent', () => {
  let component: AnadirProveedoresComponent;
  let fixture: ComponentFixture<AnadirProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
