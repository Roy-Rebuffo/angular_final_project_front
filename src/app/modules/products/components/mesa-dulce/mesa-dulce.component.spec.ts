import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaDulceComponent } from './mesa-dulce.component';

describe('MesaDulceComponent', () => {
  let component: MesaDulceComponent;
  let fixture: ComponentFixture<MesaDulceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesaDulceComponent]
    });
    fixture = TestBed.createComponent(MesaDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
