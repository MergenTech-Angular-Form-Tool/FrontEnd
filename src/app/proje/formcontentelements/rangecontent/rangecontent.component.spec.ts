import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangecontentComponent } from './rangecontent.component';

describe('RangecontentComponent', () => {
  let component: RangecontentComponent;
  let fixture: ComponentFixture<RangecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
