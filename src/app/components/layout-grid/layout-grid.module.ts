import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutGridComponent } from './layout-grid.component';

@NgModule({
    imports: [CommonModule],
    declarations: [LayoutGridComponent],
    exports: [LayoutGridComponent, RouterModule]
})
export class LayoutGridModule {}