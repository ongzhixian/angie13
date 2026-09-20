import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticatedUserLayoutComponent } from './unauthenticated-user-layout.component';

describe('UnauthenticatedUserLayoutComponent', () => {
  let component: UnauthenticatedUserLayoutComponent;
  let fixture: ComponentFixture<UnauthenticatedUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthenticatedUserLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthenticatedUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
