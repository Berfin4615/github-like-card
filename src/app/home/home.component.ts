import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubCardComponent } from '../git-hub-card/git-hub-card.component';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    GitHubCardComponent
  ],
  providers: [
    AuthService
  ]
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateToLogin() {
    console.log('Navigating to login...');
    this.router.navigate(['/login']);
  }
  
}
