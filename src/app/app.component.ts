import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  template: '<app-main></app-main>'
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
