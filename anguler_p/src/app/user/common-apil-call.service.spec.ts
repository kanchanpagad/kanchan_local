import { TestBed } from '@angular/core/testing';

import { CommonApilCallService } from './common-apil-call.service';

describe('CommonApilCallService', () => {
  let service: CommonApilCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonApilCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
