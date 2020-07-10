import { TestBed } from '@angular/core/testing';

import { FirebaseUsecaseService } from './firebase-usecase.service';

describe('FirebaseUsecaseService', () => {
  let service: FirebaseUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
