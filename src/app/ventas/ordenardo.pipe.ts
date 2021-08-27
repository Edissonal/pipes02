import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenardo'
})
export class OrdenardoPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarpo:string= 'nombre'):  Heroe[] {
    

    switch (ordenarpo) {
      
      case 'nombre':
      return heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      
      case 'vuela':
        return heroes = heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      
        case 'color':
        return   heroes = heroes.sort((a,b)=>(a.color > b.color) ? 1:-1);


      default:
        return heroes;
    }




   /* if (ordenarpo === 'sibn valor') {
  
      return heroes;
    } else {
      heroes = heroes.sort((a,b)=>(a.nombre > b.nombre) ? 1:-1);
    }

    return heroes;*/
  }
    

}
