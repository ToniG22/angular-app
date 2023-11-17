import { Component } from '@angular/core';
import { HomeModule } from './home.module';
import { faBattery } from '@fortawesome/free-solid-svg-icons';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

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
}
