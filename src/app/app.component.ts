import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: '',
})
export class AppComponent {
  title = 'poke-app';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
