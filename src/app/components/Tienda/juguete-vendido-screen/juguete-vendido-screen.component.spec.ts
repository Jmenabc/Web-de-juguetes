import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteVendidoScreenComponent } from './juguete-vendido-screen.component';

describe('JugueteVendidoScreenComponent', () => {
  let component: JugueteVendidoScreenComponent;
  let fixture: ComponentFixture<JugueteVendidoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteVendidoScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugueteVendidoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
