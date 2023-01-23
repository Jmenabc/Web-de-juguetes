import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderJuguetesComponent } from './vender-juguetes.component';

describe('VenderJuguetesComponent', () => {
  let component: VenderJuguetesComponent;
  let fixture: ComponentFixture<VenderJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderJuguetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
