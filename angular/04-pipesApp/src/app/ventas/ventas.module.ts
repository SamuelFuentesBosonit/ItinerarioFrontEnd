import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

//pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';

//NG
import { PrimeNGModule } from '../prime-ng/prime-ng.module';






@NgModule({
  declarations: [
    //components
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    //pipes
    MayusculasPipe,
    OrdenarPipe,
    VuelaPipe,
    
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
