import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteAComprarComponent } from './juguete-a-comprar.component';

describe('JugueteAComprarComponent', () => {
  let component: JugueteAComprarComponent;
  let fixture: ComponentFixture<JugueteAComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteAComprarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugueteAComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
