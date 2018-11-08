import { TestBed } from '@angular/core/testing';

import { WhycmcService } from './whycmc.service';

describe('WhycmcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhycmcService = TestBed.get(WhycmcService);
    expect(service).toBeTruthy();
  });
});
