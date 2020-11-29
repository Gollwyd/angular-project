import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { MainComponent } from './pokemon/main/main.component';
import { HeaderComponent } from './pokemon/header/header.component';
import { LogoComponent } from './pokemon/logo/logo.component';
import { CardComponent } from './pokemon/card/card.component';
import { SearchComponent } from './pokemon/search/search.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, MainComponent, LogoComponent, CardComponent, SearchComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
