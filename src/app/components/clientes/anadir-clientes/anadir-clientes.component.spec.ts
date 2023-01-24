import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirClientesComponent } from './anadir-clientes.component';

describe('AnadirClientesComponent', () => {
  let component: AnadirClientesComponent;
  let fixture: ComponentFixture<AnadirClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
