import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitHubCardComponent } from './git-hub-card/git-hub-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GitHubCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-like-card';
}
