import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  createNewUser(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signInRegular(email, password) {
    // const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut();
  }
}

