import { TestBed } from '@angular/core/testing';

import { FirebaseLibraryService } from './firebase-library.service';

describe('FirebaseLibraryService', () => {
  let service: FirebaseLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
