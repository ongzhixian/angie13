import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedUserLayoutComponent } from './authenticated-user-layout.component';

describe('AuthenticatedUserLayoutComponent', () => {
  let component: AuthenticatedUserLayoutComponent;
  let fixture: ComponentFixture<AuthenticatedUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticatedUserLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
