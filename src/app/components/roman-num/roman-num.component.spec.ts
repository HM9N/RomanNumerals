import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumComponent } from './roman-num.component';

describe('RomanNumComponent', () => {
  let component: RomanNumComponent;
  let fixture: ComponentFixture<RomanNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });;

  it('debe ser menor o igual que 1000', () => {
    expect(component.arabicNumber).toBeLessThanOrEqual(1000);
  });


});
