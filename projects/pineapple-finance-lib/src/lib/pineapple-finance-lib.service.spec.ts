import { TestBed } from '@angular/core/testing';

import { PineappleFinanceLibService } from './pineapple-finance-lib.service';

describe('PineappleFinanceLibService', () => {
  let service: PineappleFinanceLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PineappleFinanceLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
