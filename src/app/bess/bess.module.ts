import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartModule } from '../linechart/linechart.module';
import { BessComponent } from './bess.component';

@NgModule({
  declarations: [BessComponent],
  imports: [CommonModule, LinechartModule],
})
export class BessModule {}
