import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

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
 // public pokemons: Array<PokemonDataInterface>;	
  
  @Input() mode: string = 'card';
  constructor(public PokemonService: PokemonService) {
    
   }
   onCatchPokemon(p: {name: string, isCatched: boolean}): void{
    
    console.log(`Покемон ${p.name} был ${p.isCatched ? 'пойман' : 'отпущен'}`);
   }
  
  ngOnInit(): void {
   
  }

}
