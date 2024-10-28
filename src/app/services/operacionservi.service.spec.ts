import { TestBed } from '@angular/core/testing';

import { OperacionserviService } from './operacionservi.service';

describe('OperacionserviService', () => {
  let service: OperacionserviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperacionserviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
