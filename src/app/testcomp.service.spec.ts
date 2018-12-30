import { TestBed } from '@angular/core/testing';

import { TestcompService } from './testcomp.service';

describe('TestcompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestcompService = TestBed.get(TestcompService);
    expect(service).toBeTruthy();
  });
});
