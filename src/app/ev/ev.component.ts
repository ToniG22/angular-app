import { Component } from '@angular/core';
import { EvModule } from './ev.module';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ev',
  templateUrl: './ev.component.html',
  styleUrl: './ev.component.css',
})
export class EvComponent {
  faCar = faCar;

  pieChartDataProp = { data: 'ev-piechart-data' };
  lineChartDataProp = { data: 'ev-linechart-data' };
}
