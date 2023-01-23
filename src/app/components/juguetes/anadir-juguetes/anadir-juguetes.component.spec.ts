import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirJuguetesComponent } from './anadir-juguetes.component';

describe('AnadirJuguetesComponent', () => {
  let component: AnadirJuguetesComponent;
  let fixture: ComponentFixture<AnadirJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirJuguetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
