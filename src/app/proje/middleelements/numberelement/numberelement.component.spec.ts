import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberelementComponent } from './numberelement.component';

describe('NumberelementComponent', () => {
  let component: NumberelementComponent;
  let fixture: ComponentFixture<NumberelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
