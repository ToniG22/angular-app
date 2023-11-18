import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PiechartComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [PiechartComponent],
})
export class PieChartModule {}
