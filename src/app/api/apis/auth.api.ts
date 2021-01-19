import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { User } from '../types/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: BehaviorSubject<User | null> = new BehaviorSubject<User>(null);

    constructor(public afAuth: AngularFireAuth, public router: Router) {
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.user$.next(user);
                localStorage.setItem('user', JSON.stringify(this.user$.value));
            } else {
                this.user$.next(null);
                localStorage.setItem('user', null);
            }
        });
    }

    async login(email: string, password: string) {
        await this.afAuth.signInWithEmailAndPassword(email, password);
        // this.router.navigate(['posts']);
    }

    // async loginViaGoogle(): firebase.auth.UserCredential {
    //     return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // }

    async register(email: string, password: string) {
        await this.afAuth.createUserWithEmailAndPassword(email, password);
        // this.sendEmailVerification();
    }

    // async sendEmailVerification() {
    //     await (await this.afAuth.currentUser).sendEmailVerification();
    //     this.router.navigate(['verify-email']);
    // }

    async sendPasswordResetEmail(passwordResetEmail: string) {
        return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
    }

    async logout() {
        await this.afAuth.signOut();
        localStorage.removeItem('user');
        this.user$.next(null);
        // this.router.navigate(['posts']);
    }

    isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }
}
