import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from, Observable } from 'rxjs';
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
        alert('Login Successful');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Incorrect email or password');
      });

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      alert('Logout Successful');
      this.router.navigate(['']);
    });

    return from(promise);
  }
}
