import { TestBed } from '@angular/core/testing';

import { TextfieldService } from './textfield.service';

describe('TextfieldService', () => {
  let service: TextfieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextfieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
