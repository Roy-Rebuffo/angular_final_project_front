import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaDulcePageComponent } from './mesa-dulce-page.component';

describe('MesaDulcePageComponent', () => {
  let component: MesaDulcePageComponent;
  let fixture: ComponentFixture<MesaDulcePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesaDulcePageComponent]
    });
    fixture = TestBed.createComponent(MesaDulcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
