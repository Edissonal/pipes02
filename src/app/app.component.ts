import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'andres';
  valor: number = 1000;

  ob = {
    nombre: 'Andres',
    
  }

  MostraNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.ob);
  }
}
