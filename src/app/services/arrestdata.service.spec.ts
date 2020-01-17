import { TestBed } from '@angular/core/testing';

import { ArrestdataService } from './arrestdata.service';

describe('ArrestdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrestdataService = TestBed.get(ArrestdataService);
    expect(service).toBeTruthy();
  });
});
