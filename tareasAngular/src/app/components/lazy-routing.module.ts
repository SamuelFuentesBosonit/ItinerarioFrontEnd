import { JsonPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

//components
import { CommunicationParentChildComponent } from './communication-parent-child/communication-parent-child.component';
import { CounterComponent } from './counter/counter.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ExternalLibraryWithDataComponent } from './external-library-with-data/external-library-with-data.component';
import { LightSwitchComponent } from './light-switch/light-switch.component';
import { SearchOnTypeComponent } from './search-on-type/search-on-type.component';
import data from 'src/assets/countries.json'

const routes: Routes = [
  {
    path: '',
    component: DisplayHideComponent,
    pathMatch: 'full'
  },
  {
    path: 'communication-parent-child',
    component: CommunicationParentChildComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: 'external-library-with-data',
    component: ExternalLibraryWithDataComponent
  },
  {
    path: 'light-switch',
    component: LightSwitchComponent
  },
  {
    path: 'search-on-type',
    component: SearchOnTypeComponent
  },
  //{path: '/src/assets/countries.json'},
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
