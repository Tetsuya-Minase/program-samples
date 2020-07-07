import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseUsecaseService } from './service/firebase-usecase.service';
import { firebaseConfig } from './config/config';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseUsecaseService],
  exports: []
})
export class FirebaseModule { }
