import { TestBed } from '@angular/core/testing';

import { DahlService } from './dahl.service';

describe('DahlService', () => {
  let service: DahlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DahlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
