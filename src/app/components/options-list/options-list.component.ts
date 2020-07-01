import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface OptionsListItem {
  name: string;
  list: [{
    label: string; 
    value: string;
  }]
}

@Component({
  selector: 'options-list',
  templateUrl: './options-list.component.html',
  styleUrls: [ './options-list.component.css' ]
})
export class OptionsListComponent {
  @Input() items: OptionsListItem[];
  @Output() change = new EventEmitter();
  constructor(){}

  onChange(layer, e){
    this.change.emit({layer, value: e.target.value, event: e});
  }
}
