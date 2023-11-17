import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EvComponent } from './ev/ev.component';
import { BessComponent } from './bess/bess.component';
import { PvComponent } from './pv/pv.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'ev', component: EvComponent, title: 'EV Page' },
  { path: 'bess', component: BessComponent, title: 'BESS Page' },
  { path: 'pv', component: PvComponent, title: 'PV Page' },
];
