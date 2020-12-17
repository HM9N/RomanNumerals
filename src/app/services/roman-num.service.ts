import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanNumService {

  result: string= '';

  constructor() {}

  covertToRoman(num: any) {
    this.result= '';
    var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'LX', 'XL', 'X','IX', 'V', 'IV', 'I'];
    arabicNumbers.forEach((arabic, pos) => {
       while (num >= arabic) {
         num = num - arabic;
         this.result = this.result + romanSymbols[pos];
       }
    });
    return this.result;
  }
}
