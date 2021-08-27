import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'andres';
  nombreUpper: string = 'ANDRES';
  nombreCompleto: string = 'andres';
  fecha: Date = new Date();

}
