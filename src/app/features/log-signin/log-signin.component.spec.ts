import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSigninComponent } from './log-signin.component';

describe('LogSigninComponent', () => {
  let component: LogSigninComponent;
  let fixture: ComponentFixture<LogSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
