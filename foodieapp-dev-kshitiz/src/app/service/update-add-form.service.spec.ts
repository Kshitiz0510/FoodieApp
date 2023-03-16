import { TestBed } from '@angular/core/testing';

import { UpdateAddFormService } from './update-add-form.service';

describe('UpdateAddFormService', () => {
  let service: UpdateAddFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAddFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
