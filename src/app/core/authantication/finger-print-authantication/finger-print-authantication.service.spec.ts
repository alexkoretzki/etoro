import { TestBed } from '@angular/core/testing';

import { FingerPrintAuthanticationService } from './finger-print-authantication.service';

describe('FingerPrintAuthanticationService', () => {
  let service: FingerPrintAuthanticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FingerPrintAuthanticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
