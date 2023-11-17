import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-linechart-v2',
  templateUrl: './linechart-v2.component.html',
  styleUrl: './linechart-v2.component.css',
})
export class LinechartV2Component {
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: false,
        tension: 0,
        borderColor: 'blue',
        backgroundColor: 'blue',
        pointBackgroundColor: 'blue',
      },
      {
        data: [12, 23, 43, 23, 23, 32, 15],
        label: 'Series B',
        fill: false,
        tension: 0,
        borderColor: 'red',
        backgroundColor: 'red',
        pointBackgroundColor: 'red',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: 'white' },
        min: 0,
      },
      x: {
        ticks: { color: 'white' },
      },
    },
    color: 'white',
    
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
