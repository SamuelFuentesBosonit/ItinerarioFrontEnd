import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//import { AppRoutingModule } from './app-routing.module';
//lazyLoad
import { TareasRouting } from './tareas/tareas-routing.module';

//Modulos propios
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    TareasRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
