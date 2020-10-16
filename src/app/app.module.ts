import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonPanelComponent } from "./components/pokemon-panel/pokemon-panel.component";
import { PokemonDetailComponent } from "./components/pokemon-detail/pokemon-detail.component";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";
import { NavComponent } from "./components/nav/nav.component";
import { DetailSnapshotComponent } from "./components/detail-snapshot/detail-snapshot.component";
import { PokemonService } from "./services/pokemon.service";
@NgModule({
  declarations: [
    AppComponent,
    PokemonPanelComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    NavComponent,
    DetailSnapshotComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
