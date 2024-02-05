import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Array<any> = []

  constructor(private pokemonsService: PokemonsService){}

  ngOnInit() {
    this.loadPokemons()
  }

  loadPokemons() {
    for(let i = 1; i <= 151; i++) {
      this.pokemonsService.getFirstPokemonsGeneration(i).subscribe((data) => {
        console.log(data)
        this.pokemons.push(data)
      })
    }
  }
}
