import { Component, type OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'pokedex-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styles: ``,
})
export class PokedexPageComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private location: Location) {}
  public back(): void {
    this.location.back();
  }
}
