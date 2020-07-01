import { LayerTypes, TacoLayer, TacoLayerName, Taco } from "./taco.type";

export const testTaco: Taco = {
  base_layer: {
    type: LayerTypes.Base,
    recipe: 'base_layer-recipe',
    slug: 'base_layer-slug',
    name: 'base_layer-name'
  },
  seasoning: {
    type: LayerTypes.Seasonings,
    recipe: 'seasoning-recipe',
    slug: 'seasoning-slug',
    name: 'seasoning-name'
  },
  mixin: {
    type: LayerTypes.Mixins,
    recipe: 'mixin-recipe',
    slug: 'mixin-slug',
    name: 'mixin-name'
  },
  condiment: {
    type: LayerTypes.Condiments,
    recipe: 'condiment-recipe',
    slug: 'condiment-slug',
    name: 'condiment-name'
  },
  shell: {
    type: LayerTypes.Shells,
    recipe: 'shell-recipe',
    slug: 'shell-slug',
    name: 'shell-name'
  }
};

export const testTacoLayer: TacoLayer = {
  type: LayerTypes.Base,
  recipe: 'taco_layer-recipe',
  slug: 'taco_layer-slug',
  name: 'taco_layer-name'
};

export const testTacoLayerName: TacoLayerName = {
  type: LayerTypes.Base,
  slug: 'taco_layer_name-slug',
  name: 'taco_layer_name-name'
};