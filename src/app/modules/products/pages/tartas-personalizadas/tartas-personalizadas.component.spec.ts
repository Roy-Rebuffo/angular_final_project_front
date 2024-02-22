import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TartasPersonalizadasComponent } from './tartas-personalizadas.component';

describe('TartasPersonalizadasComponent', () => {
  let component: TartasPersonalizadasComponent;
  let fixture: ComponentFixture<TartasPersonalizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TartasPersonalizadasComponent]
    });
    fixture = TestBed.createComponent(TartasPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
