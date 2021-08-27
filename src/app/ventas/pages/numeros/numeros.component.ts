import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Ventas_Netas: number = 2254897.553; 
  procentaje: number = 0.48; 
}
