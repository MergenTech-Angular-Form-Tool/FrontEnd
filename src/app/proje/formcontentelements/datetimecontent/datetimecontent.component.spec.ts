import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimecontentComponent } from './datetimecontent.component';

describe('DatetimecontentComponent', () => {
  let component: DatetimecontentComponent;
  let fixture: ComponentFixture<DatetimecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
