import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PineappleFinanceLibComponent } from './pineapple-finance-lib.component';

describe('PineappleFinanceLibComponent', () => {
  let component: PineappleFinanceLibComponent;
  let fixture: ComponentFixture<PineappleFinanceLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PineappleFinanceLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PineappleFinanceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
