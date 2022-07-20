import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//import { AppRoutingModule } from './app-routing.module';
//lazyLoad
import { TareasRouting } from './tareas/tareas-routing.module';

//Modulos propios
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { TareasModule } from './tareas/tareas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    PrimeNgModule,
    TareasRouting,
    SharedModule,
    TareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
