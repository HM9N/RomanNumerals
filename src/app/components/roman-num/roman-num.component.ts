import { Component, OnInit } from '@angular/core';
import { RomanNumService } from 'src/app/services/roman-num.service';

@Component({
  selector: 'app-roman-num',
  templateUrl: './roman-num.component.html',
  styleUrls: ['./roman-num.component.css']
})
export class RomanNumComponent implements OnInit {

  arabicNumber: number = 0;
  romanNumber: string= '';
  
  constructor(private romanNum: RomanNumService) { }

  ngOnInit(): void {
  }

  calculateRomanNumeral() {
    console.log(this.arabicNumber);
    this.romanNumber = this.romanNum.covertToRoman(this.arabicNumber)
  }

}
