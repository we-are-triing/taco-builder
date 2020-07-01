import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TacoBuilderComponent } from './containers/taco-builder/taco-builder.component';

const routes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./containers/taco-builder/taco-builder.module').then( m => m.TacoBuilderModule)
    },
    {
      path: 'random',
        loadChildren: () => import('./containers/random-taco/random-taco.module').then( m => m.RandomTacoModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TacoRoutingModule {}
