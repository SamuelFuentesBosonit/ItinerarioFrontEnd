import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea01Component } from './pages/tarea01/tarea01.component';
import { Tarea02Component } from './pages/tarea02/tarea02.component';
import { Tarea03Component } from './pages/tarea03/tarea03.component';
import { Tarea04Component } from './pages/tarea04/tarea04.component';
import { Tarea05Component } from './pages/tarea05/tarea05.component';
import { Tarea06Component } from './pages/tarea06/tarea06.component';
import { Tarea07Component } from './pages/tarea07/tarea07.component';




@NgModule({
  declarations: [
    Tarea01Component,
    Tarea02Component,
    Tarea03Component,
    Tarea04Component,
    Tarea05Component,
    Tarea06Component,
    Tarea07Component
  ],
  imports: [
    CommonModule
  ]
})
export class TareasModule { }
