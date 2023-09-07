import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomnumberComponent } from './randomnumber.component';

describe('RandomnumberComponent', () => {
  let component: RandomnumberComponent;
  let fixture: ComponentFixture<RandomnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomnumberComponent]
    });
    fixture = TestBed.createComponent(RandomnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
