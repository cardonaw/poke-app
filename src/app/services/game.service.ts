import { Injectable } from '@angular/core';
import { BattleStore } from '../core/interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public cacheStore!: BattleStore;

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  public saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }
}
