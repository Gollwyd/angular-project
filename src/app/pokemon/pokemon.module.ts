import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [HeaderComponent, MainComponent, CardComponent, LogoComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
