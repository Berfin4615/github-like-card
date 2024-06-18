import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'github-like-card';

  constructor() { }

  ngOnInit(): void {
    this.executeJavaScript();
  }

  executeJavaScript() {
    const cardContainer = document.querySelector(".glowing-card");
    const card = document.querySelector(".glowing-card .card") as HTMLElement | null;

    if (cardContainer && card) {
      cardContainer.addEventListener("mousemove", (event: Event) => {
        const e = event as MouseEvent;
        const rect = card.getBoundingClientRect();
        if (rect) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--x", `${x}px`);
          card.style.setProperty("--y", `${y}px`);
        }
      });
    }
  }
}
