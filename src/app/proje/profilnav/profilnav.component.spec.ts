import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilnavComponent } from './profilnav.component';

describe('ProfilnavComponent', () => {
  let component: ProfilnavComponent;
  let fixture: ComponentFixture<ProfilnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
