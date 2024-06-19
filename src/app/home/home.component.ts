import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService],
  imports: [
    CommonModule
  ]
})
export class HomeComponent {
  constructor(public authService: AuthService) {}

  showAlert = false;

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.showAlert = true; 
      },
      error: (err) => {
        console.error('Logout error:', err); 
      },
    });
  }
}
