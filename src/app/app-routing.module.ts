import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonPanelComponent } from "./components/pokemon-panel/pokemon-panel.component";
import { PokemonDetailComponent } from "./components/pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  { path: "", component: PokemonPanelComponent },
  { path: "pokemon/:id", component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
