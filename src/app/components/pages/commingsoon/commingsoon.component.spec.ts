import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommingsoonComponent } from './commingsoon.component';

describe('ComingsoomComponent', () => {
  let component: CommingsoonComponent;
  let fixture: ComponentFixture<CommingsoonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
