import { TestBed } from '@angular/core/testing';

import { AuthoGuard } from './autho.guard';

describe('AuthoGuard', () => {
  let guard: AuthoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
