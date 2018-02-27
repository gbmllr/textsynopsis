import { TestBed, inject } from '@angular/core/testing';

import { JsonToHtmlService } from './json-to-html.service';

describe('JsonToHtmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonToHtmlService]
    });
  });

  it('should be created', inject([JsonToHtmlService], (service: JsonToHtmlService) => {
    expect(service).toBeTruthy();
  }));
});
