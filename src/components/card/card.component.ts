import { Component, input, model, OnInit } from '@angular/core';
import { ICard } from '../../app/utils/types';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  public card = model.required<ICard>();

  ngOnInit(): void {
    this._initializeCard();
  }

  protected porcentagemHP(): number {
    return Math.max(
      0,
      Math.min(100, (this.card()?.temp_hp ?? 0 / this.card().hp) * 100)
    );
  }

  private _initializeCard() {
    this.card().temp_hp = this.card().hp;
    this.card().temp_atk = this.card().atk;
    this.card().temp_def = this.card().def;
    this.card().temp_speed = this.card().speed;
  }
}
