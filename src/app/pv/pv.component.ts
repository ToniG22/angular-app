import { Component } from '@angular/core';
import { PvModule } from './pv.module';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pv',
  templateUrl: './pv.component.html',
  styleUrl: './pv.component.css',
})
export class PvComponent {
  faSolarPanel = faSolarPanel;
}
