import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemifriosComponent } from './semifrios.component';

describe('SemifriosComponent', () => {
  let component: SemifriosComponent;
  let fixture: ComponentFixture<SemifriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemifriosComponent]
    });
    fixture = TestBed.createComponent(SemifriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
