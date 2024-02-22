import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductFormComponent } from './create-product-form.component';

describe('CreateProductFormComponent', () => {
  let component: CreateProductFormComponent;
  let fixture: ComponentFixture<CreateProductFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductFormComponent]
    });
    fixture = TestBed.createComponent(CreateProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
