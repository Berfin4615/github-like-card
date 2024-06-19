import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { from, Observable } from "rxjs";
import { UserInterface } from "./user.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firebaseAuth = inject(Auth)
    constructor(private auth: Auth, private router: Router, http: HttpClient) { }
    login(userData: UserInterface): Observable<void> {
        const promise = signInWithEmailAndPassword( 
            this.auth,
            userData.email, 
            userData.password,
            ).then(() => {
                alert("Login Successful");
                this.router.navigate(['/']);
            }).catch((error)=>{
                console.log("Error:", error);
                alert("Incorrect email or password. ")
            });
        return from(promise)
    }   
}