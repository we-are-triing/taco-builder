import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FullTacoComponent } from './full-taco.component';
import { RecipeCardModule } from '../../../../components/recipe-card/recipe-card.module';

@NgModule({
    imports: [CommonModule, RecipeCardModule],
    declarations: [FullTacoComponent],
    exports: [FullTacoComponent, RouterModule]
})
export class FullTacoModule {}