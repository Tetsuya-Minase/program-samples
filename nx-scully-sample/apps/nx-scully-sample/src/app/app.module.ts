import { SecondComponent } from './components/second/second.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-router.module';
import { TopComponent } from './components/top/top.component';
import { SecondModule } from './components/second/second.module';

@NgModule({
  declarations: [AppComponent, TopComponent],
  imports: [BrowserModule, HttpClientModule, ScullyLibModule, AppRoutingModule, SecondModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
