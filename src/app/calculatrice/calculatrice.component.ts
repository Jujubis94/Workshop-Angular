import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  
  show1: boolean = false
  show2: boolean = false
  showResult: boolean = false

  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  
  numberAlea1(): number {
    this.show1 = true
    return this.number1 = Math.floor(Math.random() * 100) + 1;
  }
  numberAlea2(): number{
    this.show2 = true
    return this.number2 = Math.floor(Math.random() * 100) + 1;
  }
  add(): number {
    this.showResult = true
    return this.result = this.number1 + this.number2;
  }
  sub(): number {
    this.showResult = true
    return this.result = this.number1 - this.number2;
  }
  div(): number {
    this.showResult = true
    return this.result = this.number1 / this.number2;
  }
  mult(): number {
    this.showResult = true
    return this.result = this.number1 * this.number2;
  }
  reset(): void {
    this.show1 = false
    this.show2 = false
    this.showResult = false
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
  }

  // constructor pour initialiser des valeurs
  // Bonne pratique plutot que directement dans la declaration
  constructor() {
    this.number1 = 0
  }
}
