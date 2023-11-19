import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-linechart-v2',
  templateUrl: './linechart-v2.component.html',
  styleUrls: ['./linechart-v2.component.css'],
})
export class LinechartV2Component {
  //Used to change between day, week, month
  public lineChartData: ChartConfiguration['data'];

  //The data length of each dataset should be equal to the length of labels
  //labels = timestamp (x axis)
  //Full 30 day range
  private originalDataset = [
    {
      label: 'PV',
      data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    {
      label: 'GRID',
      data: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    },
    {
      label: 'GRID Import',
      data: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    },
    {
      label: 'GRID Export',
      data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    },
    {
      label: 'SOC',
      data: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
    },
  ];
  //Full 30 day range
  private originalLabels = [
    new Date('2023-11-01').setHours(0),
    new Date('2023-11-01').setHours(1),
    new Date('2023-11-01').setHours(2),
    new Date('2023-11-01').setHours(3),
    new Date('2023-11-01').setHours(4),
    new Date('2023-11-01').setHours(5),
    new Date('2023-11-01').setHours(6),
    new Date('2023-11-01').setHours(7),
    new Date('2023-11-01').setHours(8),
    new Date('2023-11-01').setHours(9),
    new Date('2023-11-01').setHours(10),
    new Date('2023-11-01').setHours(11),
    new Date('2023-11-01').setHours(12),
    new Date('2023-11-01').setHours(13),
    new Date('2023-11-01').setHours(14),
    new Date('2023-11-01').setHours(15),
    new Date('2023-11-01').setHours(16),
    new Date('2023-11-01').setHours(17),
    new Date('2023-11-01').setHours(18),
    new Date('2023-11-01').setHours(19),
    new Date('2023-11-01').setHours(20),
    new Date('2023-11-01').setHours(21),
    new Date('2023-11-01').setHours(22),
    new Date('2023-11-01').setHours(23),
    new Date('2023-11-02').setHours(0),
    new Date('2023-11-02').setHours(1),
    new Date('2023-11-02').setHours(2),
    new Date('2023-11-02').setHours(3),
    new Date('2023-11-02').setHours(4),
    new Date('2023-11-02').setHours(5),
    new Date('2023-11-02').setHours(6),
  ];

  public lineChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      y: {
        ticks: { color: 'white' },
        min: 0,
      },
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        ticks: { color: 'white' },
      },
    },
    color: 'white',
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  constructor() {
    this.lineChartData = {
      labels: this.originalLabels,
      datasets: this.originalDataset,
    };
    this.initChartData('day');
  }

  ngOnInit() {}

  initChartData(range: 'day' | 'week' | 'month' | 'year') {
    let endIndex: number;

    switch (range) {
      case 'day':
        this.updateChartTimeUnit('hour');
        endIndex = 24;
        break;
      case 'week':
        this.updateChartTimeUnit('day');
        endIndex = 24 * 7;
        break;
      case 'month':
        this.updateChartTimeUnit('week');
        endIndex = 24 * 7 * 30;
        break;
      case 'year':
        this.updateChartTimeUnit('month');
        endIndex = this.originalLabels.length;
        break;
    }

    //console.log(endIndex)

    this.lineChartData = {
      labels: this.originalLabels.slice(-endIndex),
      datasets: this.handleDatasetUpdate(endIndex),
    };

    //console.log(this.lineChartOptions);
  }

  handleDatasetUpdate(endIndex: number) {
    this.originalDataset.forEach((dataset) => {
      dataset.data.slice(-endIndex);
    });
    return this.originalDataset;
  }

  updateChartTimeUnit(unit: 'hour' | 'day' | 'week' | 'month') {
    this.lineChartOptions = {
      responsive: true,
      scales: {
        y: {
          ticks: { color: 'white' },
          min: 0,
        },
        x: {
          type: 'time',
          time: {
            unit: unit,
          },
          ticks: { color: 'white' },
        },
      },
      color: 'white',
    };
  }

  onRangeChange(range: 'day' | 'week' | 'month' | 'year') {
    this.initChartData(range);
  }
}
