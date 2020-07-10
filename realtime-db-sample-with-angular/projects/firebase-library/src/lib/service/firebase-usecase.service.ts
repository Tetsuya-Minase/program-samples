import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FirebaseFormatterService } from './firebase-formatter.service';
import { FirebaseKeyValue } from '../types/firebase-types';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUsecaseService {
  private items: Observable<SnapshotAction<string>[]>;
  constructor(private readonly db: AngularFireDatabase, private readonly formatter: FirebaseFormatterService) {
    this.items = this.db.list<string>('/sample').snapshotChanges();
  }

  fetchDocumentAll() {
    return this.items.pipe(map(this.formatter.documentToResponse));
  }

  async setDocument(registerKeyValue: FirebaseKeyValue) {
    const item = await this.fetchDocumentAll().pipe(take(1)).toPromise();
    const registerDocument = this.formatter.objectToDocument([...item, registerKeyValue]);
    
    this.db.object('sample').set(registerDocument);
  }
}
