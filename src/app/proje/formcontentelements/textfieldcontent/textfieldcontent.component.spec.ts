import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldcontentComponent } from './textfieldcontent.component';

describe('TextfieldcontentComponent', () => {
  let component: TextfieldcontentComponent;
  let fixture: ComponentFixture<TextfieldcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
