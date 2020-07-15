import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent {
  @Input() name = '';
  @Input() layer = '';
  @Input() markup = '';

  @HostBinding('style.--rotation') get rotation() {
    return this.randomRotation(1)
  };

  randomRotation(deg){
    return `${-1 * deg + Math.round(Math.random() * deg * 20) / 10}deg`;
  }
}
