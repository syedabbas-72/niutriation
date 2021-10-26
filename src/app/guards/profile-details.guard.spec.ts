import { TestBed } from '@angular/core/testing';

import { ProfileDetailsGuard } from './profile-details.guard';

describe('ProfileDetailsGuard', () => {
  let guard: ProfileDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
