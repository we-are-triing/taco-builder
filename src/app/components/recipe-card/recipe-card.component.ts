import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() name = '';
  @Input() layer = '';
  @Input() markup = '';
  
  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.setProperty('--rotation', this.rotation(1));
  }

  ngOnInit() {
  }

  rotation(deg){
    return `${-1 * deg + Math.round(Math.random() * deg * 20) / 10}deg`;
  }

}