import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { EvModule } from './ev/ev.module';
import { BessModule } from './bess/bess.module';
import { PvModule } from './pv/pv.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeModule, EvModule, BessModule, PvModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
