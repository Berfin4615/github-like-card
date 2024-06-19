import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-hub-card',
  standalone: true,
  imports: [],
  templateUrl: './git-hub-card.component.html',
  styleUrl: './git-hub-card.component.css'
})
export class GitHubCardComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
  ) { }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.executeJavaScript();
    }
  }
  executeJavaScript() {
    const cardContainer = document.querySelector(".glowing-card") as HTMLElement | null;
    const card = document.querySelector(".card") as HTMLElement | null;
    if (cardContainer && card) {
      cardContainer.addEventListener('mousemove', (e) => {
        const xAxis = (cardContainer.offsetWidth / 2 - e.pageX) / 50;
        const yAxis = (cardContainer.offsetHeight / 2 - e.pageY) / 50;
        if (e.pageX < card.offsetWidth / 2) {
          card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
        } else {
          card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }

        const gradientX = (e.pageX / card.offsetWidth) * 95;
        const gradientY = (e.pageY / card.offsetHeight) * 50;
        card.style.background = `radial-gradient(2000px circle at ${gradientX}% ${gradientY}%, #ff00d44d, transparent 15%)`;
      });
      
      cardContainer.addEventListener('mouseleave', (e) => {
          cardContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
          card.style.background = `rgba(0, 94, 255, 0)`;
      });
    }
  }
}
