import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ListaTarefaLocalComponent } from './pages/lista-tarefa-local/lista-tarefa-local.component';
import { ListaTarefaApiComponent } from './pages/lista-tarefa-api/lista-tarefa-api.component';

@NgModule({
  declarations: [AppComponent, ListaTarefaLocalComponent, ListaTarefaApiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
