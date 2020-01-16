import { TestBed } from '@angular/core/testing';

import { CybercrimedataService } from './cybercrimedata.service';

describe('CybercrimedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CybercrimedataService = TestBed.get(CybercrimedataService);
    expect(service).toBeTruthy();
  });
});
