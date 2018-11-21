import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Add, Delete, Reset } from './action/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todo$: Observable<Array<string>>;
  public todolist: Array<string> = [];

  constructor(private store: Store<{ todo: Array<string> }>) {
    this.todo$ = store.pipe(select('todo'));
    this.todo$.subscribe(res => this.todolist = res);
  }

  public add(value: string) {
    this.store.dispatch(new Add({ text: value }));
  }
  public delete() {
    this.store.dispatch(new Delete());
  }
  public reset() {
    this.store.dispatch(new Reset());
  }
}
