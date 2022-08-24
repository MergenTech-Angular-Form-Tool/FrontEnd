import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordcontentComponent } from './passwordcontent.component';

describe('PasswordcontentComponent', () => {
  let component: PasswordcontentComponent;
  let fixture: ComponentFixture<PasswordcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
