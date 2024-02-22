import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorMainPageComponent } from './administrator-main-page.component';

describe('AdministratorMainPageComponent', () => {
  let component: AdministratorMainPageComponent;
  let fixture: ComponentFixture<AdministratorMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministratorMainPageComponent]
    });
    fixture = TestBed.createComponent(AdministratorMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
