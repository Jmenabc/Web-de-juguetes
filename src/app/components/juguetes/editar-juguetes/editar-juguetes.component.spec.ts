import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJuguetesComponent } from './editar-juguetes.component';

describe('EditarJuguetesComponent', () => {
  let component: EditarJuguetesComponent;
  let fixture: ComponentFixture<EditarJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarJuguetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
