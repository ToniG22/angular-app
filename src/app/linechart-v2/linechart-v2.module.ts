import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartV2Component } from './linechart-v2.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [LinechartV2Component],
  imports: [CommonModule, NgChartsModule],
  exports: [LinechartV2Component],
})
export class LinechartModuleV2 {}
