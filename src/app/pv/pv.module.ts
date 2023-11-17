import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartModule } from '../linechart/linechart.module';
import { PvComponent } from './pv.component';

@NgModule({
  declarations: [PvComponent],
  imports: [CommonModule, LinechartModule],
})
export class PvModule {}
