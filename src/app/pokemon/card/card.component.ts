import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import {PokemonDataInterface} from '../main/main.component'

interface CardComponentInterface {
  pokemonData: PokemonDataInterface,
  src: string,
  onCatch: ()=> void,
  isCatched: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() pokemonData: PokemonDataInterface = {id: 0, name: '', damage: 0};

  @Input() mode: string = 'card';

  public src = '';
  public isCatched = true;
  constructor() {
    
  }
  ngOnInit(): void {
    this.src = `/assets/img/${this.pokemonData.id}.png`;
  }
  onCatch(){
    this.isCatched = !this.isCatched;

    console.log(`Покемон ${this.pokemonData.name} был ${this.isCatched ? 'пойман' : 'отпущен'}`);
  }

}
