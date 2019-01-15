import { TestBed } from '@angular/core/testing';

import { WebVRUtilityService } from './web-vrutility.service';

describe('WebVRUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebVRUtilityService = TestBed.get(WebVRUtilityService);
    expect(service).toBeTruthy();
  });
});
