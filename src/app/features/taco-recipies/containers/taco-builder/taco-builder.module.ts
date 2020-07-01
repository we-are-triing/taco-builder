import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TacoBuilderComponent } from './taco-builder.component';
import { OptionsListModule } from '../../../../components/options-list/options-list.module';
import { SplitViewModule } from '../../../../components/split-view/split-view.module';
import { FullTacoModule } from '../../components/full-taco/full-taco.module';

const routes: Routes = [
  {
    path: '',
    component: TacoBuilderComponent
  }
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), OptionsListModule, SplitViewModule, FullTacoModule],
    declarations: [TacoBuilderComponent],
    exports: [TacoBuilderComponent, RouterModule]
})
export class TacoBuilderModule {}