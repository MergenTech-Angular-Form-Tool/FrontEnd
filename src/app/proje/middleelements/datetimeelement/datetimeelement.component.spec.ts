import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeelementComponent } from './datetimeelement.component';

describe('DatetimeelementComponent', () => {
  let component: DatetimeelementComponent;
  let fixture: ComponentFixture<DatetimeelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimeelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
