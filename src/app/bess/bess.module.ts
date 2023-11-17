import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BessComponent } from './bess.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinechartModuleV2 } from '../linechart-v2/linechart-v2.module';

@NgModule({
  declarations: [BessComponent],
  imports: [CommonModule, LinechartModuleV2, FontAwesomeModule],
})
export class BessModule {}
