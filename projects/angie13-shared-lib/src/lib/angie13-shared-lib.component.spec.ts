import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angie13SharedLibComponent } from './angie13-shared-lib.component';

describe('Angie13SharedLibComponent', () => {
  let component: Angie13SharedLibComponent;
  let fixture: ComponentFixture<Angie13SharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angie13SharedLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angie13SharedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
