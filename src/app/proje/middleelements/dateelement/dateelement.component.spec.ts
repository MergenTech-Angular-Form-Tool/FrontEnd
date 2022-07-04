import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateelementComponent } from './dateelement.component';

describe('DateelementComponent', () => {
  let component: DateelementComponent;
  let fixture: ComponentFixture<DateelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
