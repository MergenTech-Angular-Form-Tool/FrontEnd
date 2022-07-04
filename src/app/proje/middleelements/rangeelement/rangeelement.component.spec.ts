import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeelementComponent } from './rangeelement.component';

describe('RangeelementComponent', () => {
  let component: RangeelementComponent;
  let fixture: ComponentFixture<RangeelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
