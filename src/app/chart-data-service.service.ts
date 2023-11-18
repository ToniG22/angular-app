import { Injectable } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

interface DataPoint {
  date: Date;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  // Sample chart data with dates
  private chartData: { label: string; data: DataPoint[] }[] = [
    {
      label: 'Series A',
      data: [
        { date: new Date('2023-01-01'), value: 65 },
        { date: new Date('2023-01-02'), value: 59 },
        { date: new Date('2023-01-03'), value: 23 },
        { date: new Date('2023-01-04'), value: 45 },
        { date: new Date('2023-01-05'), value: 67 },
        { date: new Date('2023-01-06'), value: 34 },
        { date: new Date('2023-01-07'), value: 12 },
        { date: new Date('2023-01-08'), value: 43 },
        { date: new Date('2023-01-09'), value: 11 },
        { date: new Date('2023-01-10'), value: 76 },
        { date: new Date('2023-01-11'), value: 45 },
        // ... more data points
      ],
    },
    {
      label: 'Series B',
      data: [
        { date: new Date('2023-01-01'), value: 28 },
        { date: new Date('2023-01-02'), value: 48 },
        { date: new Date('2023-01-03'), value: 34 },
        { date: new Date('2023-01-04'), value: 44 },
        { date: new Date('2023-01-05'), value: 34 },
        { date: new Date('2023-01-06'), value: 23 },
        { date: new Date('2023-01-07'), value: 32 },
        { date: new Date('2023-01-08'), value: 56 },
        { date: new Date('2023-01-09'), value: 54 },
        { date: new Date('2023-01-10'), value: 45 },
        // ... more data points
      ],
    },
    // ... more series
  ];

  constructor() {}

  // Method to return the chart data
  fetchData(): { label: string, data: DataPoint[] }[] {
    return this.chartData;
  }

  filterData(timeframe: 'day' | 'week' | 'month'): ChartDataset<'line'>[] {
    const currentDate = new Date();
    
    let startDate: Date;
    switch (timeframe) {
      case 'day':
        startDate = new Date(currentDate.setHours(0, 0, 0, 0));
        break;
      case 'week':
        startDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
        break;
      case 'month':
        startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        break;
    }
  
    return this.chartData.map(series => ({
      label: series.label,
      data: series.data.filter(point => point.date >= startDate).map(point => ({
        x: point.date.getTime(), // Converting to timestamp for Chart.js compatibility
        y: point.value
      }))
    }));
  }
  
  
}
