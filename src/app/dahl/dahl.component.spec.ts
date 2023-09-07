import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahlComponent } from './dahl.component';

describe('DahlComponent', () => {
  let component: DahlComponent;
  let fixture: ComponentFixture<DahlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DahlComponent]
    });
    fixture = TestBed.createComponent(DahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
