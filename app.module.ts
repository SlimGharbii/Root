import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { ComponenteesComponent } from './componentees/componentees.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ComponenteesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
