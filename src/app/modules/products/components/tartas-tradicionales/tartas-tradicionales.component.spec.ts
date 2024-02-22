import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TartasTradicionalesComponent } from './tartas-tradicionales.component';

describe('TartasTradicionalesComponent', () => {
  let component: TartasTradicionalesComponent;
  let fixture: ComponentFixture<TartasTradicionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TartasTradicionalesComponent]
    });
    fixture = TestBed.createComponent(TartasTradicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
