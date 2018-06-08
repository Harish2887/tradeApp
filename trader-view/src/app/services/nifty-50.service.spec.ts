import { TestBed, inject } from '@angular/core/testing';

import { Nifty50Service } from './nifty-50.service';

describe('Nifty50Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Nifty50Service]
    });
  });

  it('should be created', inject([Nifty50Service], (service: Nifty50Service) => {
    expect(service).toBeTruthy();
  }));
});
