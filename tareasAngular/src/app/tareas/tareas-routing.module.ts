import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tarea01Component } from './pages/tarea01/tarea01.component';
import { Tarea02Component } from './pages/tarea02/tarea02.component';
import { Tarea03Component } from './pages/tarea03/tarea03.component';
import { Tarea04Component } from './pages/tarea04/tarea04.component';
import { Tarea05Component } from './pages/tarea05/tarea05.component';
import { Tarea06Component } from './pages/tarea06/tarea06.component';
import { Tarea07Component } from './pages/tarea07/tarea07.component';


const routes: Routes = [
  {
    path: '',
    component: Tarea01Component,
    pathMatch: 'full'
  },
  {
    path: 'tarea02',
    component: Tarea02Component
  },
  {
    path: 'tarea03',
    component: Tarea03Component
  },
  {
    path: 'tarea04',
    component: Tarea04Component
  },
  {
    path: 'tarea05',
    component: Tarea05Component
  },
  {
    path: 'tarea06',
    component: Tarea06Component
  },
  {
    path: 'tarea07',
    component: Tarea07Component
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TareasRouting { }
