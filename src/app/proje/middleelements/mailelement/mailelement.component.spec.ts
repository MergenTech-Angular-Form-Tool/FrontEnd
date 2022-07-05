import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailelementComponent } from './mailelement.component';

describe('MailelementComponent', () => {
  let component: MailelementComponent;
  let fixture: ComponentFixture<MailelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
