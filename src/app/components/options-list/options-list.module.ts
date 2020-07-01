import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OptionsListComponent } from './options-list.component';
import { LayoutGridModule } from '../layout-grid/layout-grid.module';

@NgModule({
    imports: [CommonModule, FormsModule, LayoutGridModule],
    declarations: [OptionsListComponent],
    exports: [OptionsListComponent, RouterModule]
})
export class OptionsListModule {}