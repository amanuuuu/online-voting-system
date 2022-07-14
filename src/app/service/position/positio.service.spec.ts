import { TestBed } from '@angular/core/testing';

import { PositioService } from './positio.service';

describe('PositioService', () => {
  let service: PositioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
