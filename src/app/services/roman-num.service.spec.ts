import { TestBed } from '@angular/core/testing';

import { RomanNumService } from './roman-num.service';

describe('RomanNumService', () => {
  let service: RomanNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumService);
  });

  it('debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('should return I if number is 1', () => {
    expect(service.covertToRoman(1)).toEqual('I')
  });

});
