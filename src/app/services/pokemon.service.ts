import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Pokemon } from "../models/Pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemon(i): Observable<Pokemon> {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    return this.httpClient.get<Pokemon>(url).pipe(
      map((res) => {
        return res as Pokemon;
      })
    );
  }
}
