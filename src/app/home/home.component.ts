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
    /* console.log(this.data_ev)
    console.log(this.data_bess)
    console.log(this.data_pv)
    console.log(this.data_grid)
    console.log(this.data_loads) */
  }

  async loadData() {
    try {
      //Uncomment this when Django is running
      /* this.data_ev = (await this.dataService.getLatestSchedulingByCharger('charger_1')).data;
      this.data_bess = (await this.dataService.getLatestMeasurementByDevice('wallbox')).data;
      this.data_pv = (await this.dataService.getLatestMeasurementByDevice('meter_pv')).data;
      this.data_grid = (await this.dataService.getLatestMeasurementByDevice('meter_house')).data;
      this.data_loads = (await this.dataService.getLatestMeasurementByDevice('meter_house')).data; */
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error('Error loading data:', error);
    }
    this.verifyData()
  }
}
