import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {



  nombre: string = 'andres';
  genero: string = 'masculino';
  invitacionM = {
    
    'masculino': 'invitarlo',
    'femenino':'invitarla',
  }

  //plural

  clientes: string[] = ['Maria','pedro','anadi','la rosca de rosman','fantama el rabon'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un  cliente esperando',
    '=2': 'tenemos 2  clientes esperando',
    'other':'tenemos muchos #  clientes esperando',
  }
  constructor(private primengConfig: PrimeNGConfig) { }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
   
   
  }



  CambiarPerona() {
    this.nombre = 'Andrea';
    this.genero = 'femenino';
  }

  borraCli() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'fernando',
    edad: 35,
    direccion:'Otawa Canada'
  }

  heroes = [
    { nombre: 'superman',
      vuela:true},
    {
      nombre: 'thor',
      vuela:false  },
    {
      nombre: 'spiderman',
      vuela:false  },
    
  ]

  //asyn Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6,


  valorPromesa = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve('fin de la promesa');
    }, 3500);
  });
  
}
