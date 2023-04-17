import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TerapiaOndasComponent } from './terapia-ondas/terapia-ondas.component';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { RouterModule } from '@angular/router';
import { AcupunturaComponent } from './acupuntura/acupuntura.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TerapiaOndasComponent,
    FisioterapiaComponent,
    AcupunturaComponent,
    EspecialidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
