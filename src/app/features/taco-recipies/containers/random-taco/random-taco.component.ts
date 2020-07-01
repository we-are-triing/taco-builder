import { Component, VERSION, OnInit } from '@angular/core';
import { TacoApiService } from '../../../../services/taco/taco';
import { TacoLayerName, LayerTypes } from '../../../../services/taco/taco.type';
import { map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";

export const transTacoToViewTaco = ({base, mixin, seasoning, condiment, shell}) => ([
      {layer: LayerTypes.Shells, recipe: shell},
      {layer: LayerTypes.Base, recipe: base},
      {layer: LayerTypes.Seasonings, recipe: seasoning},
      {layer: LayerTypes.Mixins, recipe: mixin},
      {layer: LayerTypes.Condiments, recipe: condiment},
    ]);

export const random = n => Math.floor(Math.random() * n);

interface tacoLayer {
  slug: string;
  name: string;
}

@Component({
  templateUrl: './random-taco.component.html',
  styleUrls: [ './random-taco.component.css' ]
})
export class RandomTacoComponent implements OnInit {
  taco$ = this.tacoApi.taco$.pipe(
    map(transTacoToViewTaco)
  );

  constructor( private tacoApi: TacoApiService){}

  ngOnInit(){
    const tacoParts$ = this.tacoApi.tacoLayerRecipies$.pipe(
      tap(obj => {  
        Object.entries(obj).forEach((arr) => {
          const layer = arr[0] as LayerTypes;
          const list = arr[1] as tacoLayer[];
          const r = random(list.length);
          this.tacoApi.setLayer({
            type: layer,
            slug: list[r].slug,
            name: list[r].name
          })
        })
      })
    )
    const sub = tacoParts$.subscribe(() => {
      sub.unsubscribe();
    });
  }
}