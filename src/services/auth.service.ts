import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signInWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return firebase.auth().signOut();
  }

  onAuthStateChanged(cb: any) {
    return firebase.auth().onAuthStateChanged(cb);
  }

}
