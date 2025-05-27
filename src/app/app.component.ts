import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { ICard } from './utils/types';
import { CombatComponent } from './combat/combat.component';
import VERSION from '../utils/version';

@Component({
  selector: 'app-root',
  imports: [CombatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public version: string = VERSION;
}
