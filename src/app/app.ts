import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  constructor(public router: Router) {}
}
