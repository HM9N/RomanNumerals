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

  //comprueba que concuerde con la expresión regular. La expresión regular valida si es
  //un número romano ( que no repita simbolo más de veces o que el símbolo I solo pueda restar a V y a X.) 
  it('Debe respetar las reglas para formar números romanos ', () => {
    expect(service.result).toMatch(/^(?:M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|\d+)$/);
  });

  it('Debe retornar I si el número arábigo es 1', () => {
    expect(service.covertToRoman(1)).toEqual('I')
  });

  it('Debe retornar II si el número arábigo es 2', () => {
    expect(service.covertToRoman(2)).toEqual('II');
  });

  it('Debe retornar III si el número arábigo es 3', () => {
    expect(service.covertToRoman(3)).toEqual('III');
  });

  it('Debe retornar IV si el número arábigo es 4', () => {
    expect(service.covertToRoman(4)).toEqual('IV');
  });

  it('Debe retornar V si el número arábigo es 5', () => {
    expect(service.covertToRoman(5)).toEqual('V');
  });

  it('Debe retornar VI si el número arábigo es 6', () => {
    expect(service.covertToRoman(6)).toEqual('VI');
  });

  it('Debe retornar VII si el número arábigo es 7', () => {
    expect(service.covertToRoman(7)).toEqual('VII');
  });

  it('Debe retornar VIII si el número arábigo es 8', () => {
    expect(service.covertToRoman(8)).toEqual('VIII');
  });

  it('Debe retornar IX si el número arábigo es 9', () => {
    expect(service.covertToRoman(9)).toEqual('IX');
  });

  it('Debe retornar X si el número arábigo es 10', () => {
    expect(service.covertToRoman(10)).toEqual('X');
  });

});
