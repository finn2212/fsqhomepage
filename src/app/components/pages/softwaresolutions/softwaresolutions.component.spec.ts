import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresolutionsComponent } from './softwaresolutions.component';

describe('SoftwaresolutionsComponent', () => {
  let component: SoftwaresolutionsComponent;
  let fixture: ComponentFixture<SoftwaresolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwaresolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaresolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
