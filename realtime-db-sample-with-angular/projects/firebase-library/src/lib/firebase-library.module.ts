import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseUsecaseService } from './service/firebase-usecase.service';
import { firebaseConfig } from './config/config';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule
  ],
  providers: [FirebaseUsecaseService],
  exports: [LoginComponent]
})
export class FirebaseLibraryModule { }
