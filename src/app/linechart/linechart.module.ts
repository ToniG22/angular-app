import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LinechartComponent } from './linechart.component';

@NgModule({
  declarations: [LinechartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [LinechartComponent],
})
export class LinechartModule {}
