import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecontentComponent } from './datecontent.component';

describe('DatecontentComponent', () => {
  let component: DatecontentComponent;
  let fixture: ComponentFixture<DatecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
