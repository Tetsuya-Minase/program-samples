import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {TodoService} from '../service/todo.service';
import {load, fetch} from '../action/todo.action';

@Injectable()
export class TodoEffects {

    @Effect()
    loadTodo$ = this.actions$
        .pipe(
            ofType(load.type),
            mergeMap(() => this.todoService.fetchAll()
                .pipe(
                    map(serverTodo => {
                        return fetch(serverTodo);
                    }),
                    catchError(() => EMPTY)
                ))
        );

    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ) {
    }
}
