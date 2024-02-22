import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TartasTradiconalesComponent } from './tartas-tradiconales.component';

describe('TartasTradiconalesComponent', () => {
  let component: TartasTradiconalesComponent;
  let fixture: ComponentFixture<TartasTradiconalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TartasTradiconalesComponent]
    });
    fixture = TestBed.createComponent(TartasTradiconalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
