import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  BASE_URL: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getFirstPokemonsGeneration(pokemonId: number) {
      return this.http.get(`${this.BASE_URL}/${pokemonId}`)
  }

  getPokemonById(pokemonId: string | null) {
    return this.http.get(`${this.BASE_URL}/${pokemonId}`)
}
}