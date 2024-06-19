import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideFirebaseApp} from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { getAuth} from 'firebase/auth';
import { provideAuth} from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyAvIpI5RsyyP9apH-8ws6Yv5jzYQZlXxok",
  authDomain: "githubcard-4aff7.firebaseapp.com",
  projectId: "githubcard-4aff7",
  storageBucket: "githubcard-4aff7.appspot.com",
  messagingSenderId: "400169473832",
  appId: "1:400169473832:web:324c6e373464b93605621d",
  measurementId: "G-9CMT1G7J8F"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};

