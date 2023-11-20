import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8000/api'; // Replace with your Django API URL

  constructor() {}

  // Measurements Database
  getMeasurementsBetweenDates(start_date: string, end_date: string) {
    return axios.get(
      `${this.apiUrl}/measurements/dates/start:${start_date}/end:${end_date}/`
    );
  }

  getMeasurementsByDeviceRecent(device: string) {
    return axios.get(`${this.apiUrl}/measurements/device/recent/${device}/`);
  }

  getLatestMeasurementByDevice(device: string) {
    return axios.get(`${this.apiUrl}/measurements/device/latest/${device}/`);
  }

  // Scheduling Database
  getSchedulingBetweenDates(start_date: string, end_date: string) {
    return axios.get(
      `${this.apiUrl}/scheduling/dates/start:${start_date}/end:${end_date}/`
    );
  }

  getSchedulingByChargerRecent(charger: string) {
    return axios.get(`${this.apiUrl}/scheduling/charger/recent/${charger}/`);
  }

  getLatestSchedulingByCharger(charger: string) {
    return axios.get(`${this.apiUrl}/scheduling/charger/latest/${charger}/`);
  }
}
