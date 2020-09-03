import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//IMPORTACION DE MODULOS

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


//IMPORTACIONES DE COMPONENTES

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    AppComponent,

    

    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    PagesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
