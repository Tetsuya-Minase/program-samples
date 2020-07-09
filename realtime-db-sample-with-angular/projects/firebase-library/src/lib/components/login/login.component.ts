import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
// import { auth, User } from 'firebase/app';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // private _user: Observable<User | null>
  private _user: Observable<firebase.User | null>

  constructor(private auth: AngularFireAuth) {
    this._user = this.auth.user;
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  get user() {
    return this._user;
  }
}
