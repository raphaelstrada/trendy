import { TestBed } from '@angular/core/testing';

import { TrendyService } from './trendy.service';

describe('TrendyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendyService = TestBed.get(TrendyService);
    expect(service).toBeTruthy();
  });
});
