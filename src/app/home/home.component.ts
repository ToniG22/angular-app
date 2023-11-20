import { Component } from '@angular/core';
import { HomeModule } from './home.module';
import { faBattery } from '@fortawesome/free-solid-svg-icons';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faCar = faCar;
  faPlug = faPlug;
  faSolarPanel = faSolarPanel;
  faBattery = faBattery;
  faHouseChimney = faHouseChimney;

  data_ev: any;
  data_bess: any;
  data_pv: any;
  data_grid: any;
  data_loads: any;


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  verifyData(): void {
    console.log(this.data_ev)
    console.log(this.data_bess)
    console.log(this.data_pv)
    console.log(this.data_grid)
    console.log(this.data_loads)
  }

  async loadData() {
    try {
      this.data_ev = this.dataService.getLatestSchedulingByCharger('charger_1');
      this.data_bess = this.dataService.getLatestMeasurementByDevice('wallbox');
      this.data_pv = this.dataService.getLatestMeasurementByDevice('meter_pv');
      this.data_grid = this.dataService.getLatestMeasurementByDevice('meter_house');
      this.data_loads = this.dataService.getLatestMeasurementByDevice('meter_house');
      // Update your charts or UI components with this.data
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error('Error loading data:', error);
    }
    this.verifyData()
  }
}
