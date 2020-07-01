import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SplitViewComponent } from './split-view.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SplitViewComponent],
    exports: [SplitViewComponent, RouterModule]
})
export class SplitViewModule {}