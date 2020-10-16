import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-detail-snapshot",
  templateUrl: "./detail-snapshot.component.html",
  styleUrls: ["./detail-snapshot.component.scss"],
})
export class DetailSnapshotComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getPokemonDetail(e) {
    console.log(e);
  }
}
