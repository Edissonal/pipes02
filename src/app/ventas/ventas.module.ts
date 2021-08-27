import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from '../ventas/pages/basicos/basicos.component';
import { NumerosComponent } from '../ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from '../ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from '../ventas/pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenardoPipe } from './ordenardo.pipe';


@NgModule({
  declarations: [
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenardoPipe
  ], exports: [
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    

  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
