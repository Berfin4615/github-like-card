import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitHubCardComponent } from './git-hub-card/git-hub-card.component';
import { isPlatformBrowser } from '@angular/common';

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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'github-like-card';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.executeJavaScript();
    }
  }

  executeJavaScript() {
    const cardContainer = document.querySelector(".glowing-card") as HTMLElement | null;
    const card = document.querySelector(".glowing-card .card") as HTMLElement | null;

    if (cardContainer && card) {
      card.addEventListener('mousemove', (e) => {
        const xAxis = (card.offsetWidth / 2 - e.offsetX) / 20;
        const yAxis = (card.offsetHeight / 2 - e.offsetY) / 20;

        if (e.offsetX < card.offsetWidth / 2) {
          card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
        } else {
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }

        const gradientX = (e.offsetX / card.offsetWidth) * 100;
        const gradientY = (e.offsetY / card.offsetHeight) * 100;
        card.style.background = `radial-gradient(2000px circle at ${gradientX}% ${gradientY}%, #ff00d44d, transparent 15%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.background = `rgba(0, 94, 255, 0)`;
      });
    }
  }
}
