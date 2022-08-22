import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontentComponent } from './formcontent.component';

describe('FormcontentComponent', () => {
  let component: FormcontentComponent;
  let fixture: ComponentFixture<FormcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
