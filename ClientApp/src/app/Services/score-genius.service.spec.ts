import { TestBed, inject } from '@angular/core/testing';

import { ScoreGeniusService } from './score-genius.service';

describe('ScoreGeniusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreGeniusService]
    });
  });

  it('should be created', inject([ScoreGeniusService], (service: ScoreGeniusService) => {
    expect(service).toBeTruthy();
  }));
});
