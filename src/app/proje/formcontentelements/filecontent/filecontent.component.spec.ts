import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilecontentComponent } from './filecontent.component';

describe('FilecontentComponent', () => {
  let component: FilecontentComponent;
  let fixture: ComponentFixture<FilecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
