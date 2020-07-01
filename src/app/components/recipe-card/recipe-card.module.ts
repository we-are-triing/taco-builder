import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeCardComponent } from './recipe-card.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RecipeCardComponent],
    exports: [RecipeCardComponent, RouterModule]
})
export class RecipeCardModule {}