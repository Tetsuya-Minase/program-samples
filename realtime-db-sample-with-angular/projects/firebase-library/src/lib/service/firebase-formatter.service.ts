import { SnapshotAction } from '@angular/fire/database';
import { Injectable, ɵsetCurrentInjector } from '@angular/core';
import { FirebaseKeyValue, FirebaseDocument } from '../types/firebase-types';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFormatterService {

  constructor() { }

  documentToResponse(document: SnapshotAction<string>[]): FirebaseKeyValue[] {
    return document.map(item => ({ key: item.key, value: item.payload.val() }));
  }

  objectToDocument(keyValues: FirebaseKeyValue[]): FirebaseDocument {
    return keyValues.reduce((previous, current) => {
      const registereData = {[current.key!]: current.value};
      return {...previous, ...registereData};
    }, {});
  }
}
