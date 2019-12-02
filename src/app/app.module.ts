import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriaService } from './services/categoria.service';
import { CamareroService } from './services/camarero.service';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CategoriaService, CamareroService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
