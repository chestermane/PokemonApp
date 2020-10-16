import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  id: string;
  pokemon;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.pokemonService.getPokemon(this.id).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log(pokemon);
    });
  }
}
