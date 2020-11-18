import { Component, OnInit, Input } from '@angular/core';

export interface PokemonDataInterface {
  id: number,
  name: string,
  damage: number
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public pokemons: Array<PokemonDataInterface>;	
  
  @Input() mode: string = 'card';
  constructor() {
    this.pokemons = pokemons;
   }
  
  ngOnInit(): void {
   
  }

}

let pokemons = [
    {
      "name": "bulbasaur",
      "id": 1,
      "damage": 80,
    },
    {
      "name": "ivysaur",
      "id": 2,
      "damage": 90,
    },
    {
      "name": "venusaur",
      "id": 3,
      "damage": 80,
    },
    {
      "name": "charmander",
      "id": 4,
      "damage": 70,
    },
    {
      "name": "charmeleon",
      "id": 5,
      "damage": 60,
    },
    {
      "name": "charizard",
      "id": 6,
      "damage": 50,
    },
    {
      "name": "squirtle",
      "id": 7,
      "damage": 40,
    },
    {
      "name": "wartortle",
      "id": 8,
      "damage": 30,
    },
    {
      "name": "blastoise",
      "id": 9,
      "damage": 10,
    },
    {
      "name": "caterpie",
      "id": 10,
      "damage": 20,
    }]