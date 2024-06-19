import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { from, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firebaseAuth = inject(Auth)
    constructor(private http: HttpClient) { }
    login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword( 
            this.firebaseAuth,
            email, 
            password,
            ).then(() => {});
        return from(promise)
    }   
}