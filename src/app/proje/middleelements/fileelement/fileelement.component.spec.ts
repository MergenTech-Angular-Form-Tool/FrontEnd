import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileelementComponent } from './fileelement.component';

describe('FileelementComponent', () => {
  let component: FileelementComponent;
  let fixture: ComponentFixture<FileelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
