import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  upload(file: any, url: string, metaData?: any) {
    return firebase.storage()
      .ref(url)
      .put(file, metaData)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      });
  }

  getDownloadUrl(ref) {
    return firebase.storage()
      .ref(ref).getDownloadURL();
  }

  remove(path: string) {
    const imageFirebase = firebase.storage().ref(path);
    return imageFirebase.delete();
  }
}
