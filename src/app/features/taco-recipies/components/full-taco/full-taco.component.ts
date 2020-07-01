import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'full-taco',
  templateUrl: './full-taco.component.html',
  styleUrls: ['./full-taco.component.css']
})
export class FullTacoComponent implements OnInit {
  @Input() taco;
  constructor() { }

  ngOnInit() {
  }

}