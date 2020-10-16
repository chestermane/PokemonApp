import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../../services/pokemon.service";
@Component({
  selector: "app-pokemon-panel",
  templateUrl: "./pokemon-panel.component.html",
  styleUrls: ["./pokemon-panel.component.scss"],
})
export class PokemonPanelComponent implements OnInit {
  pokemonArray = [];
  constructor() {}

  ngOnInit() {}

}
