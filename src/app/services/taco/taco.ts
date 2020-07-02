import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin } from "rxjs";
import { distinctUntilChanged, map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { Taco, TacoLayer, cleanTaco, cleanTacoLayer, cleanTacoLayerName, TacoLayerName, LayerTypes } from "./taco.type";

const root = `https://taco-builder-api.herokuapp.com`;

@Injectable({
    providedIn: 'root',
})
export class TacoApiService {
  constructor(private http: HttpClient){}

  private baseBS = new BehaviorSubject(cleanTacoLayerName);
  private mixinBS = new BehaviorSubject(cleanTacoLayerName);
  private seasoningBS = new BehaviorSubject(cleanTacoLayerName);
  private condimentBS = new BehaviorSubject(cleanTacoLayerName);
  private shellBS = new BehaviorSubject(cleanTacoLayerName);
  private tacoLayerRecipiesBS = new BehaviorSubject(Object.values(LayerTypes));

  base$ = this.baseBS.asObservable().pipe(
    distinctUntilChanged(),
    switchMap(layer => this.getLayerRecipie(layer))
  );
  mixin$ = this.mixinBS.asObservable().pipe(
    distinctUntilChanged(),
    switchMap(layer => this.getLayerRecipie(layer))
  );
  seasoning$ = this.seasoningBS.asObservable().pipe(
    distinctUntilChanged(),
    switchMap(layer => this.getLayerRecipie(layer))
  );
  condiment$ = this.condimentBS.asObservable().pipe(
    distinctUntilChanged(),
    switchMap(layer => this.getLayerRecipie(layer))
  );
  shell$ = this.shellBS.asObservable().pipe(
    distinctUntilChanged(),
    switchMap(layer => this.getLayerRecipie(layer))
  );

  taco$ = combineLatest(this.base$, this.mixin$, this.seasoning$, this.condiment$, this.shell$).pipe(
    map(([base, mixin, seasoning, condiment, shell]) => ({
    base,
    seasoning,
    mixin,
    condiment,
    shell
    }))
  );

  tacoLayerRecipies$ = this.tacoLayerRecipiesBS.asObservable().pipe(
    switchMap(layers => forkJoin(layers.map(layer => this.getTacoLayerNames(layer)))),
    map(([base, mixins, seasonings, condiments, shells]) => ({
      base_layers: base,
      seasonings,
      mixins,
      condiments,
      shells
    }))
  );

  getLayerRecipie(layerName: TacoLayerName){
    if(layerName.slug !== ''){
      return this.http.get(`${root}/${layerName.type}/${layerName.slug}/`);
    }
    return [];
  }

  getTacoLayerNames(layer: LayerTypes){
    return this.http.get(`${root}/${layer}/`);
  }

  setLayer(layer: TacoLayerName){
    switch(layer?.type){
      case LayerTypes.Base:
        this.baseBS.next(layer);
        break;
      case LayerTypes.Mixins:
        this.mixinBS.next(layer);
        break;
      case LayerTypes.Seasonings:
        this.seasoningBS.next(layer);
        break;
      case LayerTypes.Condiments:
        this.condimentBS.next(layer);
        break;
      case LayerTypes.Shells:
        this.shellBS.next(layer);
        break;
      default:
        break;
    }
  }
}
