import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css',
})
export class PiechartComponent {
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

  constructor() {}
}
