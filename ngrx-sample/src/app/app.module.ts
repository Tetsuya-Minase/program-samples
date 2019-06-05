import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {todoReducer} from './reducer/todo.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './effects/todo.effects';
import {TodoService} from './service/todo.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({todo: todoReducer}),
        EffectsModule.forRoot([TodoEffects])
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
