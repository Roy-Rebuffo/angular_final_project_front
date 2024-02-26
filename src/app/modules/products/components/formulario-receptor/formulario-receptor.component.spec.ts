import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReceptorComponent } from './formulario-receptor.component';

describe('FormularioReceptorComponent', () => {
  let component: FormularioReceptorComponent;
  let fixture: ComponentFixture<FormularioReceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioReceptorComponent]
    });
    fixture = TestBed.createComponent(FormularioReceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
