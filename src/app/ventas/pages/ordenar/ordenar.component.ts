import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  mayu: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
    nombre: 'superman',
    vuela: true,
    color:Color.azul
    },
    {
      nombre: 'batman',
      vuela: false,
      color:Color.negro
    },
    {
      nombre: 'robin',
      vuela: false,
      color:Color.verde
    },
    {
      nombre: 'chico bestia',
      vuela: false,
      color:Color.rojo
    },
    {
      nombre: 'starfire',
      vuela: true,
      color:Color.verde
    },

  ];
  constructor() { }
  nostros: string = 'nosotros';
  ngOnInit(): void {
  }

  ejecutar() {
    this.mayu = !this.mayu;
    console.log(this.mayu);
  }


  cambiarOrden(valor:string) {
    this.ordenarPor = valor;
    console.log(valor);
  }

}
