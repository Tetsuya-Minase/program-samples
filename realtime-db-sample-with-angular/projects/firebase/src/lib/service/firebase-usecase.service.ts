import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUsecaseService {
  private items: Observable<SnapshotAction<string>[]>;
  constructor(private readonly db: AngularFireDatabase) {
    this.items = this.db.list<string>('/sample').snapshotChanges();
  }

  fetchDocumentAll() {
    return this.items.pipe(map(this.convertResponse));
  }

  fetchDocumentByKey(findKey: string) {
    return this.items.pipe(map(this.convertResponse), map(value => value.filter(item => item.key === findKey)));
    // return this.db.list<string>('/sample/key').snapshotChanges().pipe(map(this.convertResponse));
  }

  setDocument() {
    this.db.object('sample').set({key1: 'value1', key2: 'value2', key3: 'value3'})
  }

  private convertResponse(value: SnapshotAction<string>[]) {
    return value.map(item => ({ key: item.key, value: item.payload.val() }));
  }
}
