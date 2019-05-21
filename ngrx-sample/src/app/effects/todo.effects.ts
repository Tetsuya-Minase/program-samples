import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {TodoService} from '../service/todo.service';
import {ActionTypes, Fetch} from '../action/todo.action';

@Injectable()
export class TodoEffects {

    @Effect()
    loadTodo$ = this.actions$
        .pipe(
            ofType(ActionTypes.Load),
            mergeMap(() => this.todoService.fetchAll()
                .pipe(
                    map(serverTodo => {
                        return new Fetch({todos: serverTodo});
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
