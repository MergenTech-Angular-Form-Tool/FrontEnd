import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordelementComponent } from './passwordelement.component';

describe('PasswordelementComponent', () => {
  let component: PasswordelementComponent;
  let fixture: ComponentFixture<PasswordelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
