import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartModule } from '../linechart/linechart.module';
import { EvComponent } from './ev.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [EvComponent],
  imports: [CommonModule, LinechartModule, FontAwesomeModule],
})
export class EvModule {
}
