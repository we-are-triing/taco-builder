export interface TacoLayer {
  type: LayerTypes;
  recipe: string;
  slug: string;
  name: string;
}

export interface TacoLayerName {
  type: LayerTypes,
  slug: string;
  name: string;
}

export interface Taco {
  base_layer: TacoLayer;
  seasoning: TacoLayer;
  mixin: TacoLayer;
  condiment: TacoLayer;
  shell: TacoLayer;
}

export interface TacoOrder {
  base_layer: TacoLayerName;
  seasoning: TacoLayerName;
  mixin: TacoLayerName;
  condiment: TacoLayerName;
  shell: TacoLayerName;
}

export enum LayerTypes {
  Base = 'base_layers',
  Mixins = 'mixins',
  Seasonings = 'seasonings',
  Condiments = 'condiments',
  Shells = 'shells'
}

export const cleanTacoLayer: TacoLayer = {
  type: LayerTypes.Base,
  recipe: '',
  slug: '',
  name: ''
}
export const cleanTacoLayerName: TacoLayerName = {
  type: LayerTypes.Base,
  slug: '',
  name: ''
}

export const cleanTaco = {
  base_layer: {...cleanTacoLayer},
  seasoning: {...cleanTacoLayer},
  mixin: {...cleanTacoLayer},
  shell: {...cleanTacoLayer}
}