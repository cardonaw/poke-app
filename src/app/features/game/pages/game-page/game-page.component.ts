import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { Pokemon } from '../../../../core/interfaces/pokemon.interface';

@Component({
  selector: 'game-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
})
export class GamePageComponent implements OnInit {
  public firstPokemon?: Pokemon;

  ngOnInit(): void {}
}
