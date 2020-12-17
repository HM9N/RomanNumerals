import { Component, OnInit } from '@angular/core';
import { RomanNumService } from 'src/app/services/roman-num.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-roman-num',
  templateUrl: './roman-num.component.html',
  styleUrls: ['./roman-num.component.css']
})
export class RomanNumComponent implements OnInit {

  arabicNumber: number = 1;
  romanNumber: string= '';
  
  constructor(private romanNum: RomanNumService) { 
  }

  ngOnInit(): void {
  }

  calculateRomanNumeral() {
    this.romanNumber = this.romanNum.covertToRoman(this.arabicNumber)
  }

}
