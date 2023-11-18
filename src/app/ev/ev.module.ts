import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartModuleV2 } from '../linechart-v2/linechart-v2.module';
import { PieChartModule } from '../piechart/piechart.module';
import { EvComponent } from './ev.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [EvComponent],
  imports: [CommonModule, LinechartModuleV2, PieChartModule, FontAwesomeModule],
})
export class EvModule {
}
