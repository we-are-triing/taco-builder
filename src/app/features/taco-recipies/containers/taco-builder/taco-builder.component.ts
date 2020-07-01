import { Component, VERSION } from '@angular/core';
import { TacoApiService } from '../../../../services/taco/taco';
import { TacoLayerName, LayerTypes } from '../../../../services/taco/taco.type';
import { map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";

const mapLayer = layer => layer.map(l => ({label: l.name, value: l.slug}));

export const transFullTacoRecipiesToViewTacoRecipies = ({base_layers, mixins, seasonings, condiments, shells}) => ([
      {name: LayerTypes.Shells, list: mapLayer(shells)},
      {name: LayerTypes.Base, list: mapLayer(base_layers)},
      {name: LayerTypes.Seasonings, list: mapLayer(seasonings)},
      {name: LayerTypes.Mixins, list: mapLayer(mixins)},
      {name: LayerTypes.Condiments, list: mapLayer(condiments)},
    ]);

export const transTacoToViewTaco = ({base, mixin, seasoning, condiment, shell}) => ([
      {layer: LayerTypes.Shells, recipe: shell},
      {layer: LayerTypes.Base, recipe: base},
      {layer: LayerTypes.Seasonings, recipe: seasoning},
      {layer: LayerTypes.Mixins, recipe: mixin},
      {layer: LayerTypes.Condiments, recipe: condiment},
    ]);

@Component({
  templateUrl: './taco-builder.component.html',
  styleUrls: [ './taco-builder.component.css' ]
})
export class TacoBuilderComponent  {
  taco$ = this.tacoApi.taco$.pipe(
    map(transTacoToViewTaco)
  );
  tacoLayerRecipies$ = this.tacoApi.tacoLayerRecipies$.pipe(
    map(transFullTacoRecipiesToViewTacoRecipies),
    tap(obj => {
      obj.forEach(item => this.setLayer({
        type: item.name,
        slug: item.list[0].value,
        name: item.list[0].label
      }))
    })
  );

  constructor( private tacoApi: TacoApiService){}

  setLayer(layer: TacoLayerName){
    this.tacoApi.setLayer(layer);
  }

  onChange({layer, value, event}){
    if(layer && value && event){
      const t = event.target;
      this.setLayer({
        type: layer,
        slug: value,
        name: t.options[t.selectedIndex].textContent
      });
    }
  }
}
