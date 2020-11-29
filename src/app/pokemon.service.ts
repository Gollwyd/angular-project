import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  getAll(): any{
    return pokemons;
  }
  getById(id: number): any{
    return pokemons.find((el)=>{return id==el.id})
  }
  filter(string: string): any{
    return pokemons.filter((el)=>{return string == el.name})
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