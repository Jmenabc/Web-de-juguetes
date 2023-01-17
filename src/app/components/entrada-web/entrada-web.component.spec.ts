import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaWebComponent } from './entrada-web.component';

describe('EntradaWebComponent', () => {
  let component: EntradaWebComponent;
  let fixture: ComponentFixture<EntradaWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
