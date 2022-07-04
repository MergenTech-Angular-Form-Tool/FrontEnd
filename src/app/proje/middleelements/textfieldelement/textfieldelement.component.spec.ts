import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldelementComponent } from './textfieldelement.component';

describe('TextfieldelementComponent', () => {
  let component: TextfieldelementComponent;
  let fixture: ComponentFixture<TextfieldelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
