import { TestBed } from '@angular/core/testing';

import { PrmotionService } from './prmotion.service';

describe('PrmotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrmotionService = TestBed.get(PrmotionService);
    expect(service).toBeTruthy();
  });
});
