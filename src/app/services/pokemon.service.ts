import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemon(i): Observable<any> {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    return this.httpClient.get(url).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
