import { TestBed, inject } from '@angular/core/testing';

import { FugaService } from './fuga.service';

describe('FugaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FugaService]
    });
  });

  it('should be created', inject([FugaService], (service: FugaService) => {
    expect(service).toBeTruthy();
  }));

  it('add two numbers', inject([FugaService], (service: FugaService) => {
    expect(service.adder(1, 2)).toEqual(3);
  }));
});
