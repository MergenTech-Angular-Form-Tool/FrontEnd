import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxcontentComponent } from './checkboxcontent.component';

describe('CheckboxcontentComponent', () => {
  let component: CheckboxcontentComponent;
  let fixture: ComponentFixture<CheckboxcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
