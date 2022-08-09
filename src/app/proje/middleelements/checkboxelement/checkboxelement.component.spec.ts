import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxelementComponent } from './checkboxelement.component';

describe('CheckboxelementComponent', () => {
  let component: CheckboxelementComponent;
  let fixture: ComponentFixture<CheckboxelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
