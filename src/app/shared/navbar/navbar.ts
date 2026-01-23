import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  logout() {
    const confirmLogout = confirm(
      'Are you sure you want to logout?\nYou will have to login again.'
    );

    if (confirmLogout) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
