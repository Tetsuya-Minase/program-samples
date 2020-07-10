import { TestBed } from '@angular/core/testing';

import { FirebaseFormatterService } from './firebase-formatter.service';

describe('FirebaseFormatterService', () => {
  let service: FirebaseFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
