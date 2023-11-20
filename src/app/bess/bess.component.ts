import { Component } from '@angular/core';
import { BessModule } from './bess.module';
import { faBattery } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bess',
  templateUrl: './bess.component.html',
  styleUrl: './bess.component.css',
})
export class BessComponent {
  faBattery = faBattery;

  pieChartDataProp = { data: 'bess-piechart-data' };
  lineChartDataProp = { data: 'bess-linechart-data' };
}
