import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable, from } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { UserInterface } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private router: Router,
    private http: HttpClient,
  ) {}

  login(userData: UserInterface): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.auth,
      userData.email,
      userData.password
    )
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    return from(promise);
  }

  logout(): Observable<void> {
    return from(this.auth.signOut()).pipe(
      tap(() => {
        localStorage.removeItem('user');
      }),
      delay(1000), 
      tap(() => {
        this.router.navigate(['']);
      })
    );
  }
}
