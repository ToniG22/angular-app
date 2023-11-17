import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartModuleV2 } from '../linechart-v2/linechart-v2.module';
import { PvComponent } from './pv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PvComponent],
  imports: [CommonModule, LinechartModuleV2, FontAwesomeModule],
})
export class PvModule {}
