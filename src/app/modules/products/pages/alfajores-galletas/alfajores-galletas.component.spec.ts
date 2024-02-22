import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfajoresGalletasComponent } from './alfajores-galletas.component';

describe('AlfajoresGalletasComponent', () => {
  let component: AlfajoresGalletasComponent;
  let fixture: ComponentFixture<AlfajoresGalletasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfajoresGalletasComponent]
    });
    fixture = TestBed.createComponent(AlfajoresGalletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
