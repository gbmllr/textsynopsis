import { TestBed, inject } from '@angular/core/testing';

import { TextCompareService } from './text-compare.service';

describe('TextCompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextCompareService]
    });
  });

  it('should be created', inject([TextCompareService], (service: TextCompareService) => {
    expect(service).toBeTruthy();
  }));
});
