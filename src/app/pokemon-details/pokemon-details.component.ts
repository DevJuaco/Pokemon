import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{

  id!: string | null
  pokemon!: any

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.pokemonsService.getPokemonById(this.id).subscribe((data) => {
      console.log(data)
      this.pokemon = data
    })
  }
}
