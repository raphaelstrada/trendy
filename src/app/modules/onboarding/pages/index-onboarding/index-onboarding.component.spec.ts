import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOnboardingComponent } from './index-onboarding.component';

describe('IndexOnboardingComponent', () => {
  let component: IndexOnboardingComponent;
  let fixture: ComponentFixture<IndexOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
