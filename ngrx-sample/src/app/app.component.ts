import {Component, OnInit} from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from './action/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todo$: Observable<Array<string>>;
  public todoList: Array<string> = [];

  constructor(
      private store: Store<{ todo: Array<string>}>
  ) {
    this.todo$ = store.pipe(select(state => state.todo));
    this.todo$.subscribe(res => this.todoList = res);
  }

  ngOnInit(): void {
    this.store.dispatch(Actions.load());
  }

  public add(value: string) {
    this.store.dispatch(Actions.add(value));
  }
  public delete() {
    this.store.dispatch(Actions.del());
  }
  public reset() {
    this.store.dispatch(Actions.reset());
  }
}
