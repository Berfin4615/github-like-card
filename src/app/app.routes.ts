import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GitHubCardComponent } from './git-hub-card/git-hub-card.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: GitHubCardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
