import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicosComponent } from './pages/basicos/basicos.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { VuelaPipe } from './pipes/vuela.pipe';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';





@NgModule({
  declarations: [
    BasicosComponent,
    MayusculasPipe,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    VuelaPipe
  ],
  exports: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class VentasModule { }
