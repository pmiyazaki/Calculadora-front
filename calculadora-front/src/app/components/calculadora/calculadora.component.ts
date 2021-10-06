import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private a: number = 0;
  private b: number = 0;
  private o: number = 0;

  constructor() {}

  calcular() {
    console.log('Calculando');
  }

  ngOnInit(): void {}

  public get operandoA(): number {
    return this.a;
  }

  public set operandoA($a: number) {
    this.a = $a;
  }

  public get operandoB(): number {
    return this.b;
  }

  public set operandoB($b: number) {
    this.b = $b;
  }

  public get operador(): number {
    return this.o;
  }

  public set operador(v: number) {
    this.o = v;
  }
}
