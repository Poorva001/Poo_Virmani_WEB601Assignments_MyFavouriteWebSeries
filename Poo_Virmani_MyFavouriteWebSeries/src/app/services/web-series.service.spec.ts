import { TestBed } from '@angular/core/testing';

import { WebSeriesService } from './web-series.service';

describe('WebSeriesService', () => {
  let service: WebSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
