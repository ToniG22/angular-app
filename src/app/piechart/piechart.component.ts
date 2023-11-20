import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css',
})
export class PiechartComponent {
  @Input() pieChartDataProp: any;

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    color: 'white',
  };
  public pieChartLabels = ['Energy from Grid', 'Energy from PV'];
  public pieChartDatasets = [
    {
      data: [500, 100],
      backgroundColor: ['#FF6384', '#36A2EB'],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit() {
    console.log(this.pieChartDataProp)
  }

  constructor() {}
}
