import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercontentComponent } from './numbercontent.component';

describe('NumbercontentComponent', () => {
  let component: NumbercontentComponent;
  let fixture: ComponentFixture<NumbercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
