import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesCrudComponent } from './opciones-crud.component';

describe('OpcionesCrudComponent', () => {
  let component: OpcionesCrudComponent;
  let fixture: ComponentFixture<OpcionesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
