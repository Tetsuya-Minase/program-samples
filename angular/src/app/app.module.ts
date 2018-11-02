import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyPageComponent } from './my-page/my-page.component';
import { NgMessageComponent } from './ng-message/ng-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyPageComponent,
    NgMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
