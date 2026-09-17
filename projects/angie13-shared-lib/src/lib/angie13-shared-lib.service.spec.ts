import { TestBed } from '@angular/core/testing';

import { Angie13SharedLibService } from './angie13-shared-lib.service';

describe('Angie13SharedLibService', () => {
  let service: Angie13SharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angie13SharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
