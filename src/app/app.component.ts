import { Component } from '@angular/core';

import * as auth from 'firebase/auth';

import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cmssystem';

  constructor(public auth: AngularFireAuth) {}
 

  signInClicked(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
  }
  signOutClicked(): void {
    this.auth.signOut();
  }
}
