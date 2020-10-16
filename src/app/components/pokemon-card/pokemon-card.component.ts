import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.scss"],
})
export class PokemonCardComponent implements OnInit {
  pokemonArray = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.pokemonService.getPokemon(i).subscribe((resp) => {
        this.pokemonArray.push(resp);
      });
    }
  }
}
